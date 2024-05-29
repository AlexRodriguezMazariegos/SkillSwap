import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { TarjetaUsuarioComponent } from './tarjeta-usuario/tarjeta-usuario.component';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { ArticuloComponent } from './articulo/articulo.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../../shared/pagination/pagination.component';
import { SearchService } from '../../services/search/search.service';
import { normalizeText } from '../../utils/utils';
import { usuario } from '../../model/usuario';
import { articulo } from '../../model/articulo';
import { SeguimientoService } from '../../services/seguimiento/seguimiento.service';
import { seguimiento } from '../../model/seguimiento';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    RouterModule,
    NavbarComponent,
    SidebarComponent,
    TarjetaUsuarioComponent,
    ArticuloComponent,
    PaginationComponent,
    FormsModule  
  ],
})
export class HomeComponent implements OnInit {
  public misUsuarios: usuario[] = [];
  public articulos: articulo[] = [];
  public inputText: string = '';
  public selectedOption: string = 'Articulos';
  public currentPage = 1;
  public pageSize = 5;
  public pages: number[] = [];
  public usuariosCargados: boolean = false;
  seguidores: seguimiento[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private articuloService: ArticuloService,
    private searchService: SearchService,
    private seguimientoService: SeguimientoService
  ) {}

  ngOnInit(): void {
    this.loadUsuarios();
    this.loadArticulos();

    this.searchService.searchCriteria$.subscribe(({ text, option }) => {
      this.inputText = text;
      this.selectedOption = option;
      this.fetchData();
    });
  }

  loadUsuarios(): void {
    // Creamos un objeto auxiliar para almacenar el recuento de seguidores de cada usuario
    const seguidoresMap: { [userId: number]: number } = {};
  
    this.usuarioService.getusuarios().subscribe((data: usuario[]) => {
      this.misUsuarios = data;
  
      // Obtener la cantidad de seguidores para cada usuario
      this.misUsuarios.forEach(usuario => {
        this.seguimientoService.getSeguidores(usuario.id).subscribe((seguidores: any[]) => {
          // Asignamos la cantidad de seguidores al objeto auxiliar
          seguidoresMap[usuario.id] = seguidores.length;
          
          // Ordenamos los usuarios una vez que hemos recopilado todos los datos de los seguidores
          if (Object.keys(seguidoresMap).length === this.misUsuarios.length) {
            this.misUsuarios.sort((a, b) => seguidoresMap[b.id] - seguidoresMap[a.id]);
            this.usuariosCargados = true;
          }
        });
      });
    });
  }
  


  loadArticulos(): void {
    this.articuloService.getArticulos().subscribe((data: articulo[]) => {
      this.articulos = data;
    });
  }

  getTodos(): void {
    this.getarticulos();
    this.getusuarios(); 
  }

  getarticulos(): void {
    this.articuloService.getArticulos().subscribe((articulos: articulo[]) => {
      this.articulos = articulos;
      this.calculatePages();
      const normalizedInput = normalizeText(this.inputText);
      this.articulos = articulos.filter(
        (data) =>
          normalizeText(data.titulo).includes(normalizedInput) ||
          normalizeText(data.contenido).includes(normalizedInput)
      );
    });
  }

  getusuarios(): void {
    this.usuarioService.getusuarios().subscribe((usuarios: usuario[]) => {
      const normalizedInput = normalizeText(this.inputText);
      this.misUsuarios = usuarios.filter((data) =>
        normalizeText(data.nombre).includes(normalizedInput)
      );
    });
  }

  fetchData(): void {
    if (this.selectedOption === 'Todos') {
      this.getTodos();
    } else if (this.selectedOption === 'Articulos') {
      this.getarticulos();
    } else if (this.selectedOption === 'Usuarios') {
      this.getusuarios();
    }
  }

  calculatePages(): void {
    this.pages = [];
    const totalPages = this.totalPages;
    for (let i = 0; i < totalPages; i++) {
      this.pages.push(i + 1);
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
