import { Component } from '@angular/core';
import { MensajeRecibidoComponent } from "./mensaje-recibido/mensaje-recibido.component";

@Component({
    selector: 'app-chatbox',
    standalone: true,
    templateUrl: './chatbox.component.html',
    styleUrl: './chatbox.component.css',
    imports: [MensajeRecibidoComponent]
})
export class ChatboxComponent {

}
