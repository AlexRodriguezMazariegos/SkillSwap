import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from '../../../model/usuario';
import { UsuarioService } from '../../../services/usuario/usuario.service';

@Component({
  selector: 'app-user-botones',
  standalone: true,
  imports: [],
  templateUrl: './user-botones.component.html',
  styleUrl: './user-botones.component.css',
})
export class UserBotonesComponent implements OnInit{
  @Input() miUsuario: any;
  usuario = localStorage.getItem('usuario');
  usuarioId = 0;
  miPerfil: boolean = false;

  constructor(private router: Router, private route:ActivatedRoute, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.usuarioService.getUsuarioById(id).subscribe(data => {
        this.miUsuario = data;
        if (this.usuario) {
          const currentUser = JSON.parse(this.usuario);
          this.usuarioId = currentUser.id;
        }
  
        if (this.usuarioId == this.miUsuario.id) {
          this.miPerfil = true;
        }

      });
    });
  }


  openGit() {
    if (this.miUsuario && this.miUsuario.urlGitHub) {
      window.open(this.miUsuario.urlGitHub, '_blank');
    }
  }
  
  openChat() {
    this.router.navigate(['/chat']);
  }
}
