import { Component, Input, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { UserSuperiorComponent } from './user-superior/user-superior.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserBotonesComponent } from './user-botones/user-botones.component';
import { usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { UserInfoEditComponent } from './user-info-edit/user-info-edit.component';
import { MisArticulosComponent } from '../mis-articulos/mis-articulos.component';
import { ArticuloComponent } from '../home/articulo/articulo.component';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { articulo } from '../../model/articulo';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { EditProfileService } from '../../services/editprofile/edit-profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  imports: [
    NavbarComponent,
    SidebarComponent,
    UserSuperiorComponent,
    UserInfoComponent,
    UserBotonesComponent,
    UserInfoEditComponent,
    MisArticulosComponent,
    ArticuloComponent,
    CommonModule,
    PaginationComponent,
  ],
})
export class ProfileComponent implements OnInit {
  usuario = localStorage.getItem('usuario');
  usuarioId = 0;
  miPerfil: boolean = false;
  isEditing: boolean = false;
  public articulos: articulo[] = [];
  public miUsuario: usuario = {
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

  // Variables para la paginación
  public pageSize = 1;
  public currentPage = 1;
  public pages: number[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private articuloService: ArticuloService,
    private editProfileService: EditProfileService
  ) {
    this.editProfileService.usuarioEditado$.subscribe((usuario) => {
      console.log('PROFILE: ', usuario);
      usuario = usuario;
    });
    this.editProfileService.isEditing$.subscribe((editing) => {
      this.isEditing = editing;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.usuarioService.getUsuarioById(id).subscribe((data) => {
        this.miUsuario = data;
        if (this.usuario) {
          const currentUser = JSON.parse(this.usuario);
          this.usuarioId = currentUser.id;
        }

        if (this.usuarioId == this.miUsuario.id) {
          this.miPerfil = true;
        }

        if (this.usuarioId !== this.miUsuario.id) {
          this.articuloService
            .getArticuloByUserId(this.miUsuario.id)
            .subscribe((data: articulo[]) => {
              this.articulos = data;
              // Llamamos al metodo para la paginación
              this.calculatePages();
            });
        }
      });
    });

    // Escuchar el editar perfil
    this.editProfileService.isEditing$.subscribe((value: boolean) => {
      this.isEditing = value;
    });
  }

  // Metodos para la paginación

  calculatePages(): void {
    this.pages = [];
    const totalPages = this.totalPages;
    for (let i = 0; i < totalPages; i++) {
      this.pages.push(i + 1);
    }
  }

  get paginatedArticulos(): articulo[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.articulos.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.articulos.length / this.pageSize);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  onUsuarioModificado(usuario: usuario) {
    this.miUsuario = usuario;
  }
}
