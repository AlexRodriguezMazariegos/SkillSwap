import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { UserSuperiorComponent } from '../profile/user-superior/user-superior.component';
import { UserInfoComponent } from '../profile/user-info/user-info.component';
import { UserBotonesComponent } from '../profile/user-botones/user-botones.component';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { usuario } from '../../model/usuario';
import { articulo } from '../../model/articulo';
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
    height: '25rem',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    placeholder: 'Introduce texto aquí...',
  };

  constructor(
    private usuarioService: UsuarioService,
    private articuloService: ArticuloService
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

    this.articuloService.postArticulo(articulo).subscribe(
      (response) => {
        console.log('Artículo guardado', response);
      }
    );
  }
}
