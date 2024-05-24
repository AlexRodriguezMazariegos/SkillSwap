import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TarjetaUsuarioComponent } from './tarjeta-usuario/tarjeta-usuario.component';
import { usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { ArticuloComponent } from './articulo/articulo.component';
import { articulo } from '../../model/articulo';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    RouterModule,
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    TarjetaUsuarioComponent,
    ArticuloComponent,
    PaginationComponent,
  ],
})
export class HomeComponent implements OnInit {
  public misUsuarios: usuario[] = [];
  public articulos: articulo[] = [];
  public inputText: string = '';
  public retrievedText: string | null = null;
  public selectedOption: string = 'Articulos';

  //Variables para la paginación
  public pageSize = 5;
  public currentPage = 1;
  public pages: number[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private articuloService: ArticuloService
  ) {}

  ngOnInit(): void {
    this.loadUsuarios();
    this.loadArticulos();
    this.usuarioService.getusuarios().subscribe((data: usuario[]) => {
      this.misUsuarios = data;
    });
    this.articuloService.getArticulos().subscribe((data: articulo[]) => {
      this.articulos = data;
      //Llamamos al metodo para la paginación
      this.calculatePages();
    });
  }

  // Load all users on init
  loadUsuarios(): void {
    this.usuarioService.getusuarios().subscribe((data: usuario[]) => {
      this.misUsuarios = data;
    });
  }

  // Load all articles on init
  loadArticulos(): void {
    this.articuloService.getArticulos().subscribe((data: articulo[]) => {
      this.articulos = data;
    });
  }
  // Fetch articles based on input text
  getarticulos(): void {
    let requests = [];
    for (let i = 1; i <= 8; i++) {
      requests.push(this.articuloService.getArticuloById(i));
    }

    forkJoin(requests).subscribe((results: articulo[]) => {
      this.articulos = results.filter(
        (data) =>
          data.titulo.includes(this.inputText) ||
          data.contenido.includes(this.inputText)
      );
      this.articulos.forEach((articulo) => console.log(articulo));
    });
  }

  // Fetch users based on input text
  getusuarios(): void {
    let requests = [];
    for (let i = 1; i <= 8; i++) {
      requests.push(this.usuarioService.getUsuarioById(i));
    }

    forkJoin(requests).subscribe((results: usuario[]) => {
      this.misUsuarios = results.filter((data) =>
        data.nombre.includes(this.inputText)
      );
      this.misUsuarios.forEach((usuario) => console.log(usuario));
    });
  }

  // Handle option change event
  onOptionChange(event: any): void {
    this.selectedOption = event.target.value;
    console.log('Opción seleccionada:', this.selectedOption);
  }

  // Method to fetch data based on the selected option
  fetchData(): void {
    if (this.selectedOption === 'Articulos') {
      this.getarticulos();
    } else if (this.selectedOption === 'Usuarios') {
      this.getusuarios();
    }
  }

  //Metodos para la paginación

  calculatePages(): void {
    this.pages = [];
    const totalPages = this.totalPages;
    for (let i = 0; i < totalPages; i++) {
      this.pages.push(i + 1); // Asegurar que las páginas empiecen desde 1
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
}
