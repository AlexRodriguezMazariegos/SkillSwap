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
    }

    this.chatService.joinRoom("ABC");
    console.log('User ID:', this.userId);
    this.listenerMessage();
  }

  sendMessage() {
    console.log('Sending message with User ID:', this.userId);
    const chatMessage: ChatMessage = {
      message: this.messageInput,
      user: this.userId,
      chatId: 2, // aquí va el ID del usuario al que se envía el mensaje
      targetUserId: 1,
      userId: 0
    };
    this.chatService.sendMessage("ABC", chatMessage);
    this.messageInput = '';
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
