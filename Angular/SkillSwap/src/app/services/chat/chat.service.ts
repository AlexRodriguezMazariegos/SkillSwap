import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from '../../model/chat-mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket!: WebSocketSubject<any>;
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);

  constructor(private http: HttpClient) {
    this.initConnectionSocket();
  }

  initConnectionSocket() {
    const url = 'ws://localhost:8080/chat-socket';
    this.socket = webSocket(url);

    this.socket.subscribe({
      next: (message: any) => {
        const currentMessages = this.messageSubject.getValue();
        currentMessages.push(message);
        this.messageSubject.next(currentMessages);
      },
      error: (error: any) => {
        console.error('WebSocket error:', error);
      },
      complete: () => {
        console.log('WebSocket connection closed');
      }
    });
  }

  joinRoom(roomId: string) {
    const messages = JSON.parse(localStorage.getItem(roomId) || '[]');
    this.messageSubject.next(messages);
  }

  sendMessage(roomId: string, chatMessage: ChatMessage) {
    this.socket.next({ type: 'MESSAGE', roomId: roomId, content: chatMessage });
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
        console.error('Error al cargar los mensajes del historial:', error);
      },
      complete: () => {
        console.log('Carga de mensajes del historial completada');
      }
    });
  }
  
}
