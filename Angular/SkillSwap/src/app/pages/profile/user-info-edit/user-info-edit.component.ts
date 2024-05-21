import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-info-edit',
  standalone: true,
  imports: [],
  templateUrl: './user-info-edit.component.html',
  styleUrl: './user-info-edit.component.css'
})
export class UserInfoEditComponent {
  @Input() miUsuario: any;
}
