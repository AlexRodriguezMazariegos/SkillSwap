import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { TarjetaUsuarioComponent } from "./tarjeta-usuario/tarjeta-usuario.component";
import { usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { ArticuloService } from '../../services/articulo.service';
import { ArticuloComponent } from "./articulo/articulo.component";
import { articulo } from '../../model/articulo';
import { log } from 'console';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, NavbarComponent, SidebarComponent, TarjetaUsuarioComponent, ArticuloComponent]
})
export class HomeComponent implements OnInit {
    public misUsuarios:usuario[] = [];
    public articulos:articulo[] = [];
    constructor (private usuarioService:UsuarioService, private articuloService:ArticuloService){}
    
    ngOnInit(): void {
        this.usuarioService.getusuarios().subscribe((data:usuario[]) =>{
            this.misUsuarios = data;
        });
        this.articuloService.getArticulos().subscribe((data:articulo[])=> {
            this.articulos = data;
            console.log(this.articulos);
        });
    }

}
