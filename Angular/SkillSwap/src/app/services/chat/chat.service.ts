import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from '../../model/chat-mensaje';
import { Client, IMessage, Stomp } from '@stomp/stompjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private client!: Client;
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);
  private successMessageSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private socket$: WebSocketSubject<any> | undefined;

  constructor(private http: HttpClient) {
    console.log('Initializing ChatService');
    this.initConnectionSocket();
  }

  private initConnectionSocket() {
    console.log('Connecting to WebSocket...');
    this.socket$ = webSocket('ws://localhost:8080/chat-socket');

    this.socket$.subscribe(
      (message) => {
        console.log('Message received from WebSocket', message);
        if (message.body) {
          const messageContent = JSON.parse(message.body);
          console.log('Parsed message content', messageContent);
          const currentMessages = this.messageSubject.getValue();
          currentMessages.push(messageContent);
          this.messageSubject.next(currentMessages);
        }
      },
      (error) => {
        console.error('Error from WebSocket', error);
      },
      () => {
        console.log('WebSocket connection closed');
      }
    );
  }

  joinRoom(roomId: string) {
    console.log('Joining room', roomId);
    const messages = JSON.parse(localStorage.getItem(roomId) || '[]');
    this.messageSubject.next(messages);
  }

  sendMessage(roomId: string, chatMessage: ChatMessage) {
    console.log('Sending message', chatMessage);
    if (this.socket$) {
      this.socket$.next({ destination: '/app/chat/' + roomId, body: JSON.stringify(chatMessage) });
    } else {
      console.error('STOMP client is not connected.');
    }
  }

  getMessageSubject() {
    console.log('Getting message subject');
    return this.messageSubject.asObservable();
  }

  loadMessagesFromDatabase(roomId: string) {
    console.log('Loading messages from database for room', roomId);
    this.http.get<ChatMessage[]>(`http://localhost:8080/api/v1/chat/history/${roomId}`).subscribe({
      next: (messages: ChatMessage[]) => {
        console.log('Received messages from database', messages);
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
