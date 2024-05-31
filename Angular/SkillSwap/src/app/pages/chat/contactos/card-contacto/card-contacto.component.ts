import { Component, Input } from '@angular/core';
import { SeguimientoService } from '../../../../services/seguimiento/seguimiento.service';
import { seguimiento } from '../../../../model/seguimiento';
import { UsuarioService } from '../../../../services/usuario/usuario.service';
import { usuario } from '../../../../model/usuario';

@Component({
  selector: 'app-card-contacto',
  standalone: true,
  imports: [],
  templateUrl: './card-contacto.component.html',
  styleUrl: './card-contacto.component.css'
})
export class CardContactoComponent {
  @Input() misUsuarios: any;

}
