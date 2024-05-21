import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-post',
  standalone: true,
  imports: [],
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.css'
})
export class UserPostComponent {

  @Input() miUsuario: any;
  
}
