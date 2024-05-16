import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { TarjetaUsuarioComponent } from "./tarjeta-usuario/tarjeta-usuario.component";
import { usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, NavbarComponent, SidebarComponent, TarjetaUsuarioComponent]
})
export class HomeComponent implements OnInit {
    public misUsuarios:usuario[] = [];
    constructor (private usuarioService:UsuarioService){}
    
    ngOnInit(): void {
        this.usuarioService.getusuarios().subscribe((data:usuario[]) =>{
            this.misUsuarios = data;
            console.log(this.misUsuarios)
        });
    }

}
