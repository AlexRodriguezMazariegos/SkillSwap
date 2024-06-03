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
  userId: number = 0; // Tu id
  targetUserId: number = 2; // ID del usuario objetivo con el que se desea chatear
  messageList: any[] = [];
  // roomId: string | null = null; // ID de la sala
  roomId: string = '';

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

    this.route.params.subscribe((params) => {
      this.roomId = params['id']; // Obtener el ID de la sala de los parámetros de la URL
      if (this.roomId) {
        this.joinRoomAndLoadMessages(this.roomId); // Unirse a la sala y cargar mensajes
      }
    });

    console.log('User ID:', this.userId);
    this.listenerMessage();

    // Obtener el targetUserId
    this.chatService.getTargetUserId().subscribe((targetUserId) => {
      if (targetUserId) {
        this.targetUserId = targetUserId;
        console.log('RECOIENDO EL TARGET ID ' + this.targetUserId);
      }
    });
  }

  joinRoomAndLoadMessages(roomId: string) {
    this.chatService.joinRoom(roomId); // Unirse a la sala
    this.chatService.loadMessagesFromDatabase(roomId); // Cargar mensajes
  }

  sendMessage() {
    console.log('Sending message with User ID:', this.userId);
  
    if (this.roomId) {
      const chatMessage: ChatMessage = {
        message: this.messageInput,
        user: this.userId,
        chatId: this.roomId, 
        targetUserId: this.targetUserId,
        userId: this.userId,
      };
      this.chatService.sendMessage(this.roomId, chatMessage); // Enviar mensaje con el ID de la sala
      this.messageInput = ''; // Limpiar el campo de entrada después de enviar el mensaje
    }
  }

  listenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any) => ({
        ...item,
        message_side: item.userId === this.userId ? 'sender' : 'receiver',
      }));
    });
  }

  // listenerMessage() {
  //   this.chatService.getMessageSubject().subscribe((messages: any) => {
  //     this.messageList = messages.map((item: any) => ({
  //       ...item,
  //       message_side: item.user === this.userId ? 'sender' : 'receiver',
  //     }));
  //   });
  // }



  createChatRoom() {
    // Solicitar la creación de una nueva sala de chat o la obtención de una existente
    this.chatService.getOrCreateChat(this.userId, this.targetUserId).subscribe((chatData: any) => {
      if (chatData.id) {
        // Si se crea una nueva sala de chat o se obtiene una existente con éxito, actualizar el ID de la sala de chat
        this.roomId = chatData.id.toString(); // Asegurarse de que roomId sea de tipo string
        // Unirse a la sala y cargar mensajes
        this.joinRoomAndLoadMessages(this.roomId);
      } else {
        console.error('Error al crear o obtener la sala de chat');
      }
    });
  }
  

  
}
