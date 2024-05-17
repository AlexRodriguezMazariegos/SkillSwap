import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { UserSuperiorComponent } from '../profile/user-superior/user-superior.component';
import { UserInfoComponent } from '../profile/user-info/user-info.component';
import { UserBotonesComponent } from '../profile/user-botones/user-botones.component';
import { usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-editor-articulo',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, UserSuperiorComponent, UserInfoComponent, UserBotonesComponent, AngularEditorModule, FormsModule, HttpClientModule],
  templateUrl: './editor-articulo.component.html',
  styleUrl: './editor-articulo.component.css'
})
export class EditorArticuloComponent {
  public miUsuario:usuario | undefined
  constructor (private usuarioService:UsuarioService){}
  ngOnInit(): void {
      this.usuarioService.getUsuarioById(1).subscribe((data:usuario) =>{
          this.miUsuario = data;
          console.log(this.miUsuario)
      });
      
  }
}
