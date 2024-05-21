import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-botones',
  standalone: true,
  imports: [],
  templateUrl: './user-botones.component.html',
  styleUrl: './user-botones.component.css',
})
export class UserBotonesComponent {
  @Input() miUsuario: any;

  constructor(private router: Router) {}

  openGit() {
    if (this.miUsuario && this.miUsuario.urlGitHub) {
      window.open(this.miUsuario.urlGitHub, '_blank');
    }
  }
  
  openChat() {
    this.router.navigate(['/chat']);
  }
}
