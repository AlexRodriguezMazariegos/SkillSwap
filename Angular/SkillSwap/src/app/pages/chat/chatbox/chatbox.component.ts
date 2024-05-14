import { Component } from '@angular/core';
import { MensajeRecibidoComponent } from "./mensaje-recibido/mensaje-recibido.component";
import { MensajeEnviadoComponent } from "./mensaje-enviado/mensaje-enviado.component";

@Component({
    selector: 'app-chatbox',
    standalone: true,
    templateUrl: './chatbox.component.html',
    styleUrl: './chatbox.component.css',
    imports: [MensajeRecibidoComponent, MensajeEnviadoComponent]
})
export class ChatboxComponent {

}
