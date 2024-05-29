<<<<<<< Updated upstream
import { Component } from '@angular/core';
import { MensajeRecibidoComponent } from "./mensaje-recibido/mensaje-recibido.component";
import { MensajeEnviadoComponent } from "./mensaje-enviado/mensaje-enviado.component";
=======
import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat/chat.service';
import { ChatMessage } from '../../../model/chat-mensaje';
import { ActivatedRoute } from '@angular/router';
>>>>>>> Stashed changes

@Component({
    selector: 'app-chatbox',
    standalone: true,
    templateUrl: './chatbox.component.html',
    styleUrl: './chatbox.component.css',
    imports: [MensajeRecibidoComponent, MensajeEnviadoComponent]
})



export class ChatboxComponent implements OnInit {
    messageInput: string = '';
    userId: string = '';
    messageList: any[] = [];
    route: any;
    chatService: any;

    // constructor(private chatService: ChatService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.userId = this.route.snapshot.params["userId"];
        this.chatService.joinRoom("ABC");
        console.log('*** UserId: ' + this.userId);
        this.listenerMessage();
    }

    sendMessage() {
        console.log('**send UserId: ' + this.userId);
        const chatMessage = {
          message: this.messageInput,
          user: this.userId
        } as ChatMessage
        this.chatService.senMessage("ABC", chatMessage);
        this.messageInput = '';
    }

    listenerMessage() {
        this.chatService.getMessageSubject().subscribe((messages: any) => {
          this.messageList = messages.map((item: any) => ({
            ...item,
            message_side: item.user === this.userId ? 'sender' : 'receiver'
          }))
        });
    }
}