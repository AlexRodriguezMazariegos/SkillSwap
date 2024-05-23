import { Component, Input, OnInit } from '@angular/core';
import { UserBotonesComponent } from '../user-botones/user-botones.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario/usuario.service';

@Component({
  selector: 'app-user-superior',
  standalone: true,
  templateUrl: './user-superior.component.html',
  styleUrl: './user-superior.component.css',
  imports: [UserBotonesComponent],
})
export class UserSuperiorComponent implements OnInit {
  @Input() miUsuario: any;
  usuario = localStorage.getItem('usuario');
  usuarioId = 0;
  miPerfil: boolean = false;
  profileImgSrc: string ='';

  constructor(private router: Router, private route:ActivatedRoute, private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.profileImgSrc = `../../../assets/img/profile/${this.miUsuario?.fotoDePerfil}.jpg`;
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
}
