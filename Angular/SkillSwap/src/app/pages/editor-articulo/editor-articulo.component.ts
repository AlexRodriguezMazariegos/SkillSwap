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
  storedValue = localStorage.getItem('usuario');
  miUsuario!: usuario;
  titulo: string = '';
  descripcion: string = '';
  htmlContent: string = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '27rem',
    maxHeight: '27rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    placeholder: 'Introduce texto aquí...',
    height: 'auto',
    width: 'auto',
    minWidth: '0',
    enableToolbar: true,
    showToolbar: true,
    defaultFontSize: '',
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
      { class: 'consolas', name: 'Consolas' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  constructor(
    private usuarioService: UsuarioService,
    private articuloService: ArticuloService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    if (this.storedValue) {
      const currentUser = JSON.parse(this.storedValue);
      this.articuloService.getArticuloByUserId(currentUser.id);
      this.miUsuario = currentUser;
    }
  }

  saveContent() {
    const articulo: articulo = {
      id: 0, // El id se asigna automaticamente aunque ponga 0
      usuario: this.miUsuario,
      titulo: this.titulo,
      descripcion: this.descripcion,
      contenido: this.htmlContent,
      fechaPublicacion: new Date(),
    };

    console.log('Enviando artículo:', articulo);

    this.articuloService.postArticulo(articulo).subscribe({
      next: (response) => {
        console.log('Artículo guardado', response);
        this.showSuccessToast();
      },
      error: (err) => {
        console.error('Error al guardar el artículo', err);
        this.showErrorToast();
      }
    });

    this.articuloService.postArticulo(articulo).subscribe((response) => {
      console.log('Artículo guardado', response);
    });
  }

  showSuccessToast() {
    this.toast.success('Artículo guardado', {
      duration: 1400,
      style: {
        border: '1px solid #002d3c',
        padding: '16px',
        color: '#002d3c',
        zIndex: 999999999,
        position: 'fixed',
        top: '60px',
        left: '650px',
      },
      iconTheme: {
        primary: '#002d3c',
        secondary: '#ffff',
      },
    });
  }

  showErrorToast() {
    this.toast.error('Artículo no guardado', {
      duration: 1400,
      style: {
        border: '1px solid #d9534f',
        padding: '16px',
        color: '#d9534f',
        zIndex: 999999999,
        position: 'fixed',
        top: '60px',
        left: '650px',
      },
      iconTheme: {
        primary: '#d9534f',
        secondary: '#ffff',
      },
    });
  }
}
