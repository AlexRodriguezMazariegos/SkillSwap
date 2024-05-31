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

  messageInput: string= '';
  user = localStorage.getItem('usuario')
  messageList: any[]=[];
  userId = 0;

  constructor(private chatService: ChatService,
    private route: ActivatedRoute
    ){
  }

  ngOnInit():void{

    if (this.user) {
      const currentUser = JSON.parse(this.user);
      this.userId = currentUser.id;
    }

    this.chatService.joinRoom("ABC");
    console.log('*** UserId: '+this.userId);
    this.listenerMessage();
  }
 
  sendMessage(){
    console.log('**send UserId: '+this.userId);
    const chatMessage = {
      message: this.messageInput,
      user: this.userId.toString(),
      chatId:  /* El ID del chat al que estás enviando el mensaje */,
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
  