import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-superior',
  standalone: true,
  imports: [],
  templateUrl: './user-superior.component.html',
  styleUrl: './user-superior.component.css'
})
export class UserSuperiorComponent {

  @Input() miUsuario: any;

}
