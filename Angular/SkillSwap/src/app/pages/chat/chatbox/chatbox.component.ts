import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../../../model/chat-mensaje';
import { ChatService } from '../../../services/chat/chat.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ChatboxComponent implements OnInit {
  usuario = sessionStorage.getItem('usuario');
  messageInput: string = '';
  userId: number = 0;
  targetUserId: number = 0; // ID del usuario objetivo con el que se desea chatear
  messageList: any[] = [];

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('Initializing ChatboxComponent');
    if (this.usuario) {
      const currentUser = JSON.parse(this.usuario);
      this.userId = currentUser.id;
      this.targetUserId = currentUser.targetUserId; // Asume que se obtiene el targetUserId desde localStorage
    }

    // Supongamos que el ID del usuario objetivo se pasa como parámetro de ruta
    this.route.params.subscribe(params => {
      this.targetUserId = params['targetUserId'];
    });

    this.chatService.joinRoom("ABC");
    console.log('User ID:', this.userId);
    this.listenerMessage();
  }

  sendMessage() {
    console.log('Sending message with User ID:', this.userId);
    const chatMessage: ChatMessage = {
      message: this.messageInput,
      user: this.userId,
      chatId: 0, // Este valor se actualizará después de obtener o crear el chat
      targetUserId: this.targetUserId,
      userId: 0
    };

    // Primero, crear o obtener el chat entre los usuarios
    this.chatService.getOrCreateChat(this.userId, this.targetUserId).subscribe(chat => {
      chatMessage.chatId = chat.id;
      this.chatService.sendMessage("ABC", chatMessage);
      this.messageInput = '';
    });
  }

  listenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any) => ({
        ...item,
        message_side: item.user === this.userId ? 'sender' : 'receiver'
      }));
    });
  }
}
