import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChatMessage } from '../../model/chat-mensaje';
import { chat } from '../../model/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private webSocket: WebSocket | undefined; // Definición de WebSocket
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);
  private successMessageSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    console.log('Initializing ChatService');
    this.initConnectionSocket();
  }

  // Inicialización de la conexión WebSocket
  private initConnectionSocket() {
    console.log('Connecting to WebSocket...');
    this.webSocket = new WebSocket('ws://localhost:8080/chat-socket');

    // Cuando la conexión se establece
    this.webSocket.onopen = () => {
      console.log('WebSocket connected');
    };

    // Cuando se recibe un mensaje
    this.webSocket.onmessage = (event) => {
      console.log('Message received from WebSocket', event.data);
      const messageContent = JSON.parse(event.data);
      const currentMessages = this.messageSubject.getValue();
      currentMessages.push(messageContent);
      this.messageSubject.next(currentMessages);
    };

    // Cuando ocurre un error
    this.webSocket.onerror = (error) => {
      console.error('Error from WebSocket', error);
    };

    // Cuando la conexión se cierra
    this.webSocket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

  joinRoom(roomId: string) {
    console.log('Joining room', roomId);
    const messages = JSON.parse(localStorage.getItem(roomId) || '[]');
    this.messageSubject.next(messages);
  }

  // Enviar un mensaje
  sendMessage(roomId: string, chatMessage: ChatMessage) {
    console.log('Sending message', chatMessage);
    if (this.webSocket) {
      this.webSocket.send(JSON.stringify({ destination: '/app/chat/' + roomId, body: JSON.stringify(chatMessage) }));
    } else {
      console.error('WebSocket is not connected.');
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

  crearChat(chat: chat) {
    return this.http.post<chat>('http://localhost:8080/api/v1/chat/crear', chat);
  }

  getOrCreateChat(usuarioId1: number, usuarioId2: number) {
    return this.http.post<chat>('http://localhost:8080/api/v1/chat/get-or-create', { usuarioId1, usuarioId2 });
  }
}
