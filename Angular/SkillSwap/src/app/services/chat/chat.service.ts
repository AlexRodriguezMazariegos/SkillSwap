import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from '../../model/chat-mensaje';
import { Client, IMessage, Stomp } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private client!: Client;
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);
  private successMessageSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    this.initConnectionSocket();
  }

  private initConnectionSocket() {
    console.log('Connecting to WebSocket...');
    this.client = Stomp.client('ws://localhost:8080/chat-socket');

    this.client.onConnect = (frame) => {
      console.log('Connected: ' + frame);
      this.successMessageSubject.next("STOMP connected successfully");
      this.client.subscribe('/topic/messages', (message: IMessage) => {
        if (message.body) {
          const messageContent = JSON.parse(message.body);
          const currentMessages = this.messageSubject.getValue();
          currentMessages.push(messageContent);
          this.messageSubject.next(currentMessages);
        }
      });
    };

    this.client.activate();
  }

  joinRoom(roomId: string) {
    const messages = JSON.parse(localStorage.getItem(roomId) || '[]');
    this.messageSubject.next(messages);
  }

  sendMessage(roomId: string, chatMessage: ChatMessage) {
    if (this.client && this.client.connected) {
      this.client.publish({ destination: '/app/chat/' + roomId, body: JSON.stringify(chatMessage) });
    } else {
      console.error('STOMP client is not connected.');
    }
  }

  getMessageSubject() {
    return this.messageSubject.asObservable();
  }

  loadMessagesFromDatabase(roomId: string) {
    this.http.get<ChatMessage[]>(`http://localhost:8080/api/v1/chat/history/${roomId}`).subscribe({
      next: (messages: ChatMessage[]) => {
        this.messageSubject.next(messages);
      },
      error: (error: any) => {
        console.error('Error loading chat history messages:', error);
      },
      complete: () => {
        console.log('Loading chat history messages completed');
      }
    });
  }
}
