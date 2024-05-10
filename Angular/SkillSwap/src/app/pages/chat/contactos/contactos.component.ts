import { Component } from '@angular/core';
import { CardContactoComponent } from "./card-contacto/card-contacto.component";

@Component({
    selector: 'app-contactos',
    standalone: true,
    templateUrl: './contactos.component.html',
    styleUrl: './contactos.component.css',
    imports: [CardContactoComponent]
})
export class ContactosComponent {

}
