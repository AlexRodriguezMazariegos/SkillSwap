import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from '../../../model/usuario';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { seguimiento } from '../../../model/seguimiento';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';
import { EditProfileService } from '../../../services/editprofile/edit-profile.service';
import { filter, take } from 'rxjs/operators';
import { Console } from 'console';
import { ChatService } from '../../../services/chat/chat.service';

@Component({
  selector: 'app-user-botones',
  standalone: true,
  imports: [],
  templateUrl: './user-botones.component.html',
  styleUrls: ['./user-botones.component.css'],
})
export class UserBotonesComponent implements OnInit {
  @Input()
  miUsuario!: usuario;
  @Output() userData$ = new EventEmitter<usuario>();

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
    fotoDePerfil: '',
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
      fotoDePerfil: '',
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
      fotoDePerfil: '',
    },
  };
  window: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private seguimientoService: SeguimientoService,
    private editProfileService: EditProfileService,
    private chatService: ChatService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.fetchUsuarioData(id);
    });

    this.editProfileService.isEditing$.subscribe((value: boolean) => {
      this.isEditing = value;
    });

    this.editProfileService.usuarioEditado$.subscribe((usuario) => {
      if (usuario) {
        this.miUsuario = usuario;
      }
    });
  }

  private fetchUsuarioData(id: number): void {
    this.usuarioService.getUsuarioById(id).subscribe({
      next: (data) => {
        this.miUsuario = data;
        this.checkUserSession();
        this.setSeguirUsuarioData();
        this.checkIfFollowing();
      },
      error: (error) => {
        console.error('Error al cargar los datos del usuario:', error);
      },
    });
  }

  private checkUserSession(): void {
    if (this.usuario) {
      const currentUser = JSON.parse(this.usuario);
      this.usuarioId = currentUser;

      if (this.usuarioId.id === this.miUsuario.id) {
        this.miPerfil = true;
      }
    }
  }

  private setSeguirUsuarioData(): void {
    this.seguirUsuario.seguido = this.miUsuario;
    this.seguirUsuario.seguidor = this.usuarioId;
  }

  private checkIfFollowing(): void {
    this.seguimientoService
      .getSeguimiento(this.usuarioId.id, this.miUsuario.id)
      .subscribe({
        next: (data) => {
          this.estaSiguiendo = !!data;
        },
        error: (error) => {
          console.error('Error al verificar seguimiento:', error);
        },
      });
  }

  openGit(): void {
    if (this.miUsuario && this.miUsuario.urlGitHub) {
      window.open(this.miUsuario.urlGitHub, '_blank');
    }
  }

  openChat() {
    // Obtener el ID del usuario objetivo (targetUserId)
    const targetUserId = this.miUsuario?.id;
    
    // Verificar si el targetUserId está definido
    if (targetUserId) {
      // Llamar al método setTargetUserId() del servicio de chat para establecer el targetUserId
      this.chatService.setTargetUserId(targetUserId);
  
      const usuarioId1 = this.usuarioId.id; // LOGEADO
      
      this.chatService.getOrCreateChat(usuarioId1, targetUserId).subscribe({
        next: (chat) => {
          console.log('Chat creado o obtenido:', chat);
    
          // Redirigir al usuario al chat utilizando el enrutador
          this.router.navigate(['/chat', chat.id]); // Suponiendo que el ID del chat se encuentra en chat.id
        },
        error: (error) => {
          console.error('Error al obtener o crear el chat:', error);
        }
      });
    } else {
      console.error('El usuario no está definido.');
    }
  }
  
  

  followUser(): void {
    this.seguimientoService.postSeguimiento(this.seguirUsuario).subscribe({
      next: () => location.reload(),
      error: (error) => {
        console.error('Error al seguir al usuario:', error);
      },
    });
  }

  unfollowUser(): void {
    this.seguimientoService
      .deleteSeguimiento(this.usuarioId.id, this.miUsuario.id)
      .subscribe({
        next: () => location.reload(),
        error: (error) => {
          console.error('Error al dejar de seguir al usuario:', error);
        },
      });
  }

  editarPerfil() {
    this.editProfileService.setIsEditing(true);
  }

  guardarPerfil(): void {
    this.editProfileService.usuarioEditado$
      .pipe(
        filter(usuario => usuario !== null),
        take(1)
      )
      .subscribe({
        next: (usuario) => {
          if (usuario) {
            this.miUsuario = usuario;
  
            // Obtener la contraseña actual del usuario
            const contrasenaActual = this.miUsuario.contrasena;
  
            // Crear el objeto para actualizar, excluyendo la contraseña pero incluyendo los demás campos
            const usuarioParaActualizar: usuario = {
              id: this.miUsuario.id,
              nombre: this.miUsuario.nombre,
              apellido: this.miUsuario.apellido,
              email: this.miUsuario.email,
              contrasena: this.miUsuario.contrasena,
              urlGitHub: this.miUsuario.urlGitHub,
              puestoEmpresa: this.miUsuario.puestoEmpresa,
              skills: this.miUsuario.skills,
              fotoDePerfil: this.miUsuario.fotoDePerfil,
             
            };
  
            // Enviar la solicitud PUT
            this.usuarioService.putUsuario(this.miUsuario.id, usuarioParaActualizar).subscribe({
              next: () => {
                console.log('Usuario actualizado correctamente.');
              },
              error: (error) => {
                console.error('Error al actualizar el usuario:', error);
              }
            });
          } else {
            console.error('No se recibió el usuario editado.');
          }
        },
        error: (error) => {
          console.error('Error al obtener el usuario editado:', error);
        }
      });
      this.editProfileService.setIsEditing(false);
  }
  
  cancelarPerfil() {
    this.editProfileService.setIsEditing(false);
  }
}
