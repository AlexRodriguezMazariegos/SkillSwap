import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from '../../../model/usuario';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { seguimiento } from '../../../model/seguimiento';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';
import { EditProfileService } from '../../../services/editprofile/edit-profile.service';

@Component({
  selector: 'app-user-botones',
  standalone: true,
  imports: [],
  templateUrl: './user-botones.component.html',
  styleUrl: './user-botones.component.css',
})
export class UserBotonesComponent implements OnInit{
  @Input() miUsuario: any;
  @Output() edit = new EventEmitter<void>();
  isEditing: boolean = false;
  usuario = sessionStorage.getItem('usuario');
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

  constructor(private router: Router, private route: ActivatedRoute, private usuarioService: UsuarioService, private seguimientoService: SeguimientoService, private editProfileService : EditProfileService) {}

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
    //Escuchar el editar perfil
    this.editProfileService.isEditing$.subscribe((value: boolean) => {
      this.isEditing = value;
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

  editarPerfil(){
    this.editProfileService.setIsEditing(true);
  }

  guardarPerfil() {
    // Crear un objeto de tipo usuario con las propiedades del formulario
    const usuarioParaGuardar: usuario = {
      id: this.miUsuario.id, // Asigna el ID existente si lo tienes, de lo contrario, déjalo como está
      nombre: this.miUsuario.nombre, // Asigna el nombre existente si lo tienes, de lo contrario, déjalo como está
      apellido: this.miUsuario.apellido, // Asigna el apellido existente si lo tienes, de lo contrario, déjalo como está
      contrasena: this.miUsuario.contrasena, // Asigna la contraseña existente si lo tienes, de lo contrario, déjalo como está
      puestoEmpresa: this.miUsuario.puestoEmpresa,
      email: this.miUsuario.email,
      urlGitHub: this.miUsuario.urlGitHub,
      // Asigna valores predeterminados o nulos a las propiedades adicionales si es necesario
      skills: this.miUsuario.skills || [], // Utiliza las skills existentes si las tienes, de lo contrario, asigna un array vacío
      fotoDePerfil: this.miUsuario.fotoDePerfil || '' // Utiliza la foto de perfil existente si la tienes, de lo contrario, asigna una cadena vacía
    };
  
    // Llamar al servicio para guardar el perfil
    this.usuarioService.postUsuario(usuarioParaGuardar).subscribe(
      (response) => {
        console.log('Perfil guardado exitosamente:', response);
        this.editProfileService.setIsEditing(false);
      },
      (error) => {
        console.error('Error al guardar el perfil:', error);
      }
    );
  }
  
  

  cancelarPerfil(){
    this.editProfileService.setIsEditing(false);
  }
}
