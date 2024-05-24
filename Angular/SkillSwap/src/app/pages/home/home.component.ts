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

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [RouterModule, NavbarComponent, SidebarComponent, TarjetaUsuarioComponent, ArticuloComponent, FormsModule]
})
export class HomeComponent implements OnInit {
    public misUsuarios: usuario[] = [];
    public articulos: articulo[] = [];
    public inputText: string = '';
    public retrievedText: string | null = null;
    public selectedOption: string = 'Todos';
    
    constructor(private usuarioService: UsuarioService, private articuloService: ArticuloService) {}
    
    ngOnInit(): void {
        this.loadUsuarios();
        this.loadArticulos();
    }
    
    loadUsuarios(): void {
        this.usuarioService.getusuarios().subscribe((data: usuario[]) => {
            this.misUsuarios = data;
        });
    }

    loadArticulos(): void {
        this.articuloService.getArticulos().subscribe((data: articulo[]) => {
            this.articulos = data;
        });
    }
    
    
    
    
    getarticulos(): void {
        function quitarTildes(cadena: string): string {
            return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
        let requests = [];
        for (let i = 1; i <= this.articuloService.getArticulos.length; i++) {
            requests.push(this.articuloService.getArticuloById(i));
        }

        forkJoin(requests).subscribe((results: articulo[]) => {
            this.articulos = results.filter(data => 
                quitarTildes(data.contenido.toLowerCase()).includes(quitarTildes(this.inputText)) || quitarTildes(data.titulo.toLowerCase()).includes(quitarTildes(this.inputText))
            );
            this.articulos.forEach(articulo => console.log(articulo));
        });
    }
    
    getusuarios(): void {
        function quitarTildes(cadena: string): string {
            return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
        let requests = [];
        for (let i = 1; i <= this.usuarioService.getusuarios.length ; i++) {
            requests.push(this.usuarioService.getUsuarioById(i));
        }

        forkJoin(requests).subscribe((results: usuario[]) => {
            this.misUsuarios = results.filter(data => 
                quitarTildes(data.nombre.toLowerCase()).includes(quitarTildes(this.inputText))
            );
            this.misUsuarios.forEach(usuario => console.log(usuario));
        });
    }

    onOptionChange(event: any): void {
        this.selectedOption = event.target.value;
        console.log('Opción seleccionada:', this.selectedOption);
    }
    
        inputValue: string = ''; // Declaración de la variable

        onInput(): void {
            this.fetchData(); // Llama a tu función aquí
        }

    fetchData(): void {
        if(this.selectedOption === 'Todos'){
            this.getarticulos();
            this.getusuarios();
        } else if (this.selectedOption === 'Articulos') {
            this.getarticulos();
        } else if (this.selectedOption === 'Usuarios') {
            this.getusuarios();
        }
    }
}
