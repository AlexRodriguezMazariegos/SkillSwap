import { Component, Input, input } from '@angular/core';
import { UserBotonesComponent } from '../user-botones/user-botones.component';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {

  @Input() miUsuario: any;
  @Input() mostrarPrimerContenedor: any;
}
