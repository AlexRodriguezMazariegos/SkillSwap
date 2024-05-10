import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { ContactosComponent } from "./contactos/contactos.component";
import { ChatboxComponent } from "./chatbox/chatbox.component";

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css',
    imports: [NavbarComponent, SidebarComponent, ContactosComponent, ChatboxComponent]
})
export class ChatComponent {

}
