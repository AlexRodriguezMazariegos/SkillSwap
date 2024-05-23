import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { TarjetaUsuarioComponent } from "./tarjeta-usuario/tarjeta-usuario.component";
import { usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { ArticuloComponent } from "./articulo/articulo.component";
import { articulo } from '../../model/articulo';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { log } from 'console';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterModule, NavbarComponent, SidebarComponent, TarjetaUsuarioComponent, ArticuloComponent, FormsModule]
})
export class HomeComponent implements OnInit {
    public misUsuarios:usuario[] = [];
    public articulos:articulo[] = [];
inputText: any;
    constructor (private usuarioService:UsuarioService, private articuloService:ArticuloService, private articuloservice:ArticuloService){}
    
    ngOnInit(): void {
        this.usuarioService.getusuarios().subscribe((data:usuario[]) =>{
            this.misUsuarios = data;
        });
        this.articuloService.getArticulos().subscribe((data:articulo[])=> {
            this.articulos = data;
        });
    }
    retrievedText: string | null = null;
    public miArticulo:articulo | undefined;
    getarticulos(): void {
      let requests = [];
      this.articulos = [];
      for (let i = 1; i < 9; i++) {
          requests.push(this.articuloservice.getArticuloById(i));
      }
  
      forkJoin(requests).subscribe((results: articulo[]) => {
        let esta = 0;
          for (let i = 0; i < results.length; i++) {
            let data = results[i];
            
            if (data.titulo.includes(this.inputText) || data.contenido.includes(this.inputText)) {
                this.articulos[esta] = data;
                esta++;
            }
          }
          for (let i = 1; i < results.length; i++) {
              console.log(this.articulos[i]);
          }
  
          // this.router.navigate([`/buscar-articulos/`]);
      });
  }

}
