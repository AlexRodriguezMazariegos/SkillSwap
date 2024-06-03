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
  imports: [FormsModule],
})
export class ChatboxComponent implements OnInit {
  usuario = sessionStorage.getItem('usuario');
  messageInput: string = '';
  userId: number = 0; //Tu id
  targetUserId: number = 0; // ID del usuario objetivo con el que se desea chatear
  messageList: any[] = [];

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('Initializing ChatboxComponent');
    if (this.usuario) {
      const currentUser = JSON.parse(this.usuario);
      this.userId = currentUser.id;
    }

    this.chatService.joinRoom('ABC');
    console.log('User ID:', this.userId);
    this.listenerMessage();

    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.chatService.loadMessagesFromDatabase(id);
    });

    // Obtener el targetUserId
    this.chatService.getTargetUserId().subscribe((targetUserId) => {
      if (targetUserId) {
        this.targetUserId = targetUserId;
        console.log('RECOIENDO EL TARGET ID ' + this.targetUserId);
      }
    });
  }

  sendMessage() {
    console.log('Sending message with User ID:', this.userId);

    this.route.params.subscribe((params) => {
      const id = params['id'];
      const chatMessage: ChatMessage = {
        message: this.messageInput,
        user: this.userId,
        chatId: id, 
        targetUserId: this.targetUserId,
        userId: this.userId,
      };
      this.chatService.sendMessage('ABC', chatMessage);
    });
  }

  listenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any) => ({
        ...item,
        message_side: item.user === this.userId ? 'sender' : 'receiver',
      }));
    });
  }
}
