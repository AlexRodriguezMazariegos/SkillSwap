import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { UserSuperiorComponent } from '../profile/user-superior/user-superior.component';
import { UserInfoComponent } from '../profile/user-info/user-info.component';
import { UserBotonesComponent } from '../profile/user-botones/user-botones.component';
import { UsuarioService } from '../../services/usuario/usuario.service';
import {
  AngularEditorConfig,
  AngularEditorModule,
} from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { usuario } from '../../model/usuario';
import { articulo } from '../../model/articulo';
import { HotToastService } from '@ngneat/hot-toast';
import { register } from 'module';
@Component({
  selector: 'app-editor-articulo',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    UserSuperiorComponent,
    UserInfoComponent,
    UserBotonesComponent,
    AngularEditorModule,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './editor-articulo.component.html',
  styleUrl: './editor-articulo.component.css',
})
export class EditorArticuloComponent {
  miUsuario!: usuario;
  titulo: string = 'fffff';
  descripcion: string = 'fffff';
  htmlContent: string = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '30rem',
    maxHeight: '30rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    placeholder: 'Introduce texto aquí...',
  };

  constructor(
    private usuarioService: UsuarioService,
    private articuloService: ArticuloService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarioById(1).subscribe((data: usuario) => {
      this.miUsuario = data;
      console.log(this.miUsuario);
    });
  }

  saveContent() {
    const articulo: articulo = {
      id: 0, // El id se asigna automaticamente aunque ponga 0
      usuario: this.miUsuario,
      titulo: this.titulo,
      descripcion: this.descripcion,
      contenido: JSON.stringify({ content: this.htmlContent }),
      fechaPublicacion: new Date(),
    };

    console.log('Enviando artículo:', articulo);

    this.toast.success('Artículo guardado', {
      duration: 5000,
      style: {
        border: '1px solid #ff6d43',
        padding: '16px',
        color: '#ff6d43',
        zIndex: 999999999, 
        position: 'fixed', 
        top: '60px', 
        left: '650px',
      },
      iconTheme: {
        primary: '#ff6d43',
        secondary: '#ffff',
      },
    });

    this.articuloService.postArticulo(articulo).subscribe((response) => {
      console.log('Artículo guardado', response);
    });
  }
}
