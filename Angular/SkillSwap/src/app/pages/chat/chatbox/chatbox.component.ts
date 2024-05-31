import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../../../model/chat-mensaje';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../../services/chat/chat.service';







@Component({
    selector: 'app-chatbox',
    standalone: true,
    templateUrl: './chatbox.component.html',
    styleUrl: './chatbox.component.css',
    imports: [FormsModule],
    
})
export class ChatboxComponent implements OnInit {

    messageInput: string = '';
    userId: string = '';
    messageList: any[] = [];
   
    // route: any;
    // chatService: any;
  
    constructor(private chatService: ChatService, private route: ActivatedRoute) { }
  
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
      this.chatService.sendMessage("ABC", chatMessage);
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
 
  sendMessage(){
    console.log('**send UserId: '+this.userId);
    const chatMessage = {
      message: this.messageInput,
      user: this.userId.toString(),
      chatId: 2 /* El ID del chat al que estás enviando el mensaje */,
      userId: this.userId
    } as ChatMessage;
    this.chatService.sendMessage("ABC", chatMessage);
    this.messageInput='';
}

  listenerMessage(){
    this.chatService.getMessageSubject().subscribe((messages: any)=>{
      this.messageList=messages.map((item: any)=>({
        ...item,
        message_side: item.user === this.userId ? 'sender': 'receiver' 
      }))
    });
  }

}
  