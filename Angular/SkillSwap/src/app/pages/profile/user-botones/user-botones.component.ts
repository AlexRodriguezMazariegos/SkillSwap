import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from '../../../model/usuario';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { seguimiento } from '../../../model/seguimiento';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';
import { EditProfileService } from '../../../services/editprofile/edit-profile.service';
import { SkillService } from '../../../services/skill/skill.service';
import { filter, switchMap, take } from 'rxjs/operators';
import { throwError } from 'rxjs';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private seguimientoService: SeguimientoService,
    private editProfileService: EditProfileService,
    private skillService: SkillService
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

  openChat(): void {
    this.router.navigate(['/chat']);
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
    // Creamos una nueva promesa
    const promise = new Promise<void>((resolve, reject) => {
      this.editProfileService.usuarioEditado$
        .pipe(
          filter((usuario) => usuario !== null), // Filtramos para asegurarnos de que el usuario no sea nulo
          take(1) // Tomamos solo la primera emisión
        )
        .subscribe({
          next: (usuario) => {
            if (usuario) {
              // Si hay un usuario, actualizamos miUsuario
              this.miUsuario = usuario;
              resolve(); // Resolvemos la promesa
            } else {
              reject('No se recibió el usuario editado.'); // Rechazamos la promesa si el usuario es nulo
            }
          },
          error: (error) => {
            reject(error); // Rechazamos la promesa en caso de error
          },
        });
    });

    promise
      .then(() => {
        // Una vez que la promesa se resuelve, procedemos con la actualización del perfil
        this.usuarioService
          .postUsuario(this.miUsuario)
          .subscribe({
            next: () => {
              //console.log('Usuario actualizado correctamente.');
            },
            error: (error) => {
              //console.error('Error al actualizar el usuario:', error);
            },
          });
      })
      .catch((error) => {
        //console.error('Error al obtener el usuario editado:', error);
      });

      this.editProfileService.setIsEditing(false);
  }
  
  

  cancelarPerfil(){
    this.editProfileService.setIsEditing(false);
  }
}
