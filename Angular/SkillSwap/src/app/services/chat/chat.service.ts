import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { BehaviorSubject } from 'rxjs';
import SockJS from 'sockjs-client';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from '../../model/chat-mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private stompClient: any;
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);

  constructor(private http: HttpClient) {
    this.iniConnectionSocket();
  }

  iniConnectionSocket() {
    const url = '//localhost:8080/api/v1/chat/chat-socket';
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
  }

  joinRoom(roomId: string) {
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/topic/${roomId}`, (message: any) => {
        const messageContent = JSON.parse(message.body);
        const currentMessages = this.messageSubject.getValue();
        currentMessages.push(messageContent);
        this.messageSubject.next(currentMessages);
      });
      this.loadMessagesFromDatabase(roomId);
    });
  }

  sendMessage(roomId: string, chatMessage: ChatMessage) {
    this.stompClient.send(`/app/chat/${roomId}`, {}, JSON.stringify(chatMessage));
  }

  getMessageSubject() {
    return this.messageSubject.asObservable();
  }

  loadMessagesFromDatabase(roomId: string) {
    this.http.get<ChatMessage[]>(`http://localhost:8080/api/v1/chat/history/${roomId}`).subscribe(messages => {
      this.messageSubject.next(messages);
    });
  }
}
