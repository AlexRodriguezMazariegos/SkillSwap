import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatMessage } from '../../model/chat-mensaje';
import { chat } from '../../model/chat';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private stompClient: any;
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<
    ChatMessage[]
  >([]);

  messageInput: string = '';


  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private webSocket: WebSocket | undefined; // Definición de WebSocket
  private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]);
  private successMessageSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  private headers!: HttpHeaders;
  private targetUserIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  constructor(private http: HttpClient, private authservice: AuthService) {
    console.log('Initializing ChatService');
    this.initConnectionSocket();
    this.headers = this.addAuthorizationHeader();
  }

  private addAuthorizationHeader(): HttpHeaders {
    let token = this.authservice.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
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

    this.webSocket.onerror = (error) => {
      console.error('Error from WebSocket', error);
    };

    this.webSocket.onclose = () => {
      console.log('WebSocket connection closed');
    };
  }

  joinRoom(roomId: string) {
    console.log('Joining room', roomId);
    const messages = JSON.parse(localStorage.getItem(roomId) || '[]');
    this.messageSubject.next(messages);
    this.loadMessagesFromDatabase(roomId);
  }



// Enviar un mensaje
sendMessage(roomId: string, chatMessage: ChatMessage) {
  console.log("roomId", roomId);
  console.log("chatMessage", chatMessage);
  if (this.webSocket) {
    this.webSocket.send(JSON.stringify({ destination: '/chat/' + roomId, body: JSON.stringify(chatMessage) }));
    
    // Guardar el mensaje en la base de datos
    this.http.post<ChatMessage>('http://localhost:8080/api/v1/chat/chat/' + roomId, chatMessage, { headers: this.headers })
      .subscribe({
        next: (savedMessage: ChatMessage) => {
          console.log('Message saved:', savedMessage);
          const currentMessages = this.messageSubject.getValue();
          currentMessages.push(savedMessage);
          this.messageSubject.next(currentMessages);

          this.messageInput = '';
        },
        error: (error: any) => {
          console.error('Error saving message:', error);
        }
      });
  } else {
    console.error('WebSocket is not initialized.');
  }
}


  
  
  getMessageSubject() {
    console.log('Getting message subject');
    return this.messageSubject.asObservable();
  }

  loadMessagesFromDatabase(roomId: string) {
    console.log('Loading messages from database for room', roomId);
    this.http.get<ChatMessage[]>(`http://localhost:8080/api/v1/chat/history/${roomId}`, { headers: this.headers}).subscribe({
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
    return this.http.post<chat>('http://localhost:8080/api/v1/chat/get-or-create', { usuarioId1, usuarioId2 }, { headers: this.headers});
  }

  setTargetUserId(targetUserId: number) {
    this.targetUserIdSubject.next(targetUserId);
  }

  getTargetUserId(): Observable<number | null> {
    return this.targetUserIdSubject.asObservable();
  }
}
