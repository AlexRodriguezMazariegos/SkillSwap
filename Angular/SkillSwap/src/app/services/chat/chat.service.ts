import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from '../../model/chat-mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket!: WebSocket;
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);

  constructor(private http: HttpClient) {
    this.initConnectionSocket();
  }

  initConnectionSocket() {
    const url = 'ws://localhost:8080/chat-socket';
    this.socket = new WebSocket(url);
  }

  joinRoom(roomId: string) {
    this.socket.onopen = () => {
      this.socket.send(JSON.stringify({ type: 'JOIN', roomId: roomId }));
    };
    this.socket.onmessage = (message: any) => {
      const messageContent = JSON.parse(message.data);
      const currentMessages = this.messageSubject.getValue();
      currentMessages.push(messageContent);
      this.messageSubject.next(currentMessages);
    };
    this.loadMessagesFromDatabase(roomId);
  }

  sendMessage(roomId: string, chatMessage: ChatMessage) {
    this.socket.send(JSON.stringify({ type: 'MESSAGE', roomId: roomId, content: chatMessage }));
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
