import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { UserSuperiorComponent } from "./user-superior/user-superior.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserBotonesComponent } from "./user-botones/user-botones.component";
import { usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [NavbarComponent, SidebarComponent, UserSuperiorComponent, UserInfoComponent, UserBotonesComponent]
})
export class ProfileComponent implements OnInit {
    public miUsuario:usuario | undefined
    constructor (private usuarioService:UsuarioService){}
    ngOnInit(): void {
        this.usuarioService.getUsuarioById(1).subscribe((data:usuario) =>{
            this.miUsuario = data;
            console.log(this.miUsuario)
        });
        
    }

}
