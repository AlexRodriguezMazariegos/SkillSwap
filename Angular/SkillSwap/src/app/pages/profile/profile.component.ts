import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { UserSuperiorComponent } from "./user-superior/user-superior.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserBotonesComponent } from "./user-botones/user-botones.component";
import { usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { UserPostComponent } from "./user-post/user-post.component";
import { UserInfoEditComponent } from './user-info-edit/user-info-edit.component';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [NavbarComponent, SidebarComponent, UserSuperiorComponent, UserInfoComponent, UserBotonesComponent, UserPostComponent, UserInfoEditComponent]
})
export class ProfileComponent implements OnInit {
    usuario = localStorage.getItem('usuario');
    usuarioId = 0;
    miPerfil: boolean = false;
    public miUsuario:usuario = {
        id: 0,
        nombre: '',
        apellido: '',
        email: '',
        contrasena: '',
        urlGitHub: '',
        puestoEmpresa: '',
        skills: [],
        fotoDePerfil: ''
    }
    constructor(private usuarioService:UsuarioService, private route:ActivatedRoute){}

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.usuarioService.getUsuarioById(id).subscribe(data => {
          this.miUsuario = data;
          if (this.usuario) {
        const currentUser = JSON.parse(this.usuario);
        this.usuarioId = currentUser.id;
      }

      if(this.usuarioId == this.miUsuario.id) {
        this.miPerfil = true;
      }
        });
      });
  }
}
