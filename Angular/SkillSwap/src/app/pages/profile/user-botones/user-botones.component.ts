import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { usuario } from '../../../model/usuario';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { seguimiento } from '../../../model/seguimiento';
import { SeguimientoService } from '../../../services/seguimiento/seguimiento.service';
import { EditProfileService } from '../../../services/editprofile/edit-profile.service';
import { SkillService } from '../../../services/skill/skill.service';

@Component({
  selector: 'app-user-botones',
  standalone: true,
  imports: [],
  templateUrl: './user-botones.component.html',
  styleUrls: ['./user-botones.component.css'],
})
export class UserBotonesComponent implements OnInit {
  @Input() miUsuario: any;
  @Output() edit = new EventEmitter<void>();

  isEditing: boolean = false;
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
      this.usuarioService.getUsuarioById(id).subscribe((data) => {
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

        this.seguimientoService
          .getSeguimiento(this.usuarioId.id, this.miUsuario.id)
          .subscribe((data) => {
            this.estaSiguiendo = !!data;
          });
      });
    });

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
    this.seguimientoService
      .postSeguimiento(this.seguirUsuario)
      .subscribe(() => {
        location.reload();
      });
  }

  unfollowUser() {
    this.seguimientoService
      .deleteSeguimiento(this.usuarioId.id, this.miUsuario.id)
      .subscribe(() => {
        location.reload();
      });
  }

  editarPerfil() {
    this.editProfileService.setIsEditing(true);
  }

  guardarPerfil() {
    const usuarioParaGuardar: usuario = {
      id: this.miUsuario.id,
      nombre: this.miUsuario.nombre,
      apellido: this.miUsuario.apellido,
      contrasena: this.miUsuario.contrasena,
      puestoEmpresa: this.miUsuario.puestoEmpresa,
      email: this.miUsuario.email,
      urlGitHub: this.miUsuario.urlGitHub,
      skills: this.miUsuario.skills || [],
      fotoDePerfil: this.miUsuario.fotoDePerfil || '',
    };

    const idSkills = usuarioParaGuardar.skills.map((skill) => skill.id);

    console.log(usuarioParaGuardar);

    this.editProfileService.setIsEditing(false);
  }

  cancelarPerfil() {
    this.editProfileService.setIsEditing(false);
  }
}
