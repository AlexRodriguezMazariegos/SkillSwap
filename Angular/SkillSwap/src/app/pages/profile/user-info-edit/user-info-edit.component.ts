import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-info-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-info-edit.component.html',
  styleUrl: './user-info-edit.component.css'
})
export class UserInfoEditComponent {
  @Input() miUsuario: any;
}
