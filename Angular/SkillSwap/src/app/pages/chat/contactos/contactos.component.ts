import { Component } from '@angular/core';
import { CardContactoComponent } from "./card-contacto/card-contacto.component";
import { usuario } from '../../../model/usuario';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

@Component({
    selector: 'app-contactos',
    standalone: true,
    templateUrl: './contactos.component.html',
    styleUrl: './contactos.component.css',
    imports: [CardContactoComponent]
})
export class ContactosComponent {
  
}
