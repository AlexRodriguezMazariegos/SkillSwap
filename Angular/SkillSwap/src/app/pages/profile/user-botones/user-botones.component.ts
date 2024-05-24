import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from '../../../model/usuario';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { seguimiento } from '../../../model/seguimiento';
import { log } from 'console';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';

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
  usuarioId: usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    urlGitHub: '',
    puestoEmpresa: '',
    skills: [],
    fotoDePerfil: ''
  };
  miPerfil: boolean = false;
  estaSiguiendo: boolean = false;
  seguirUsuario: seguimiento = {
    seguidor: {
      id: 0,
      nombre: '',
      apellido: '',
      email: '',
      contrasena: '',
      urlGitHub: '',
      puestoEmpresa: '',
      skills: [],
      fotoDePerfil: ''
    },
    seguido: {
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
  };

  constructor(private router: Router, private route: ActivatedRoute, private usuarioService: UsuarioService, private seguimientoService: SeguimientoService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.usuarioService.getUsuarioById(id).subscribe(data => {
        this.miUsuario = data;
        if (this.usuario) {
          const currentUser = JSON.parse(this.usuario);
          this.usuarioId = currentUser;
        }

        if (this.usuarioId.id === this.miUsuario.id) {
          this.miPerfil = true;
        }

        this.seguirUsuario.seguido = this.miUsuario;
        this.seguirUsuario.seguidor = this.usuarioId;
      
        this.seguimientoService.getSeguimiento(this.usuarioId.id, this.miUsuario.id).subscribe(data => {
          if(data) {
            this.estaSiguiendo = true;
          } else {
            this.estaSiguiendo = false;
          }
        });
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

  followUser() {
    this.seguimientoService.postSeguimiento(this.seguirUsuario).subscribe(data => {
      // TODO - Intentar pasar el servicio de getSeguidores
      location.reload();   
    });
  }

  unfollowUser() {
    this.seguimientoService.deleteSeguimiento(this.usuarioId.id, this.miUsuario.id).subscribe(data => {
      location.reload();
    })
  }
}
