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
    FormsModule,
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
  private seguidoresMap: { [userId: number]: number } = {};

  constructor(
    private usuarioService: UsuarioService,
    private articuloService: ArticuloService,
    private searchService: SearchService,
    private seguimientoService: SeguimientoService
  ) {}

  ngOnInit(): void {
    const { text, option } = this.searchService.getSearchCriteria();
    this.inputText = text;
    this.selectedOption = option;

    this.searchService.searchCriteria$.subscribe(({ text, option }) => {
      console.log(text);
      this.inputText = text;
      this.selectedOption = option;
      this.loadSeguidores();
    });
  }

  private loadSeguidores(): void {
    this.usuarioService.getusuarios().subscribe((data: usuario[]) => {
      this.misUsuarios = data;
      this.misUsuarios.forEach((usuario) => {
        this.seguimientoService
          .getSeguidores(usuario.id)
          .subscribe((seguidores: any[]) => {
            this.seguidoresMap[usuario.id] = seguidores.length;
            if (
              Object.keys(this.seguidoresMap).length === this.misUsuarios.length
            ) {
              this.usuariosCargados = true;
              this.fetchData();
            }
          });
      });
    });
  }

  private loadUsuarios(): void {
    if (this.usuariosCargados) {
      if (this.inputText.trim() === '') {
        // Si la barra de búsqueda está vacía, mostrar los usuarios destacados
        console.log('La barra de busqueda esta vacia');
        this.misUsuarios.sort(
          (a, b) => this.seguidoresMap[b.id] - this.seguidoresMap[a.id]
        );
        console.log('Usuarios ordenados: ', this.misUsuarios);
      } else {
        // Si hay texto en la barra de búsqueda, filtrar por el texto
        const normalizedInput = normalizeText(this.inputText);
        this.misUsuarios = this.misUsuarios
          .filter((data) =>
            normalizeText(data.nombre).includes(normalizedInput)
          )
          .sort((a, b) => this.seguidoresMap[b.id] - this.seguidoresMap[a.id]);
      }
    }
  }

  private loadArticulos(): void {
    this.articuloService.getArticulos().subscribe((data: articulo[]) => {
      const normalizedInput = normalizeText(this.inputText);
      this.articulos = data.filter(
        (articulo) =>
          normalizeText(articulo.titulo).includes(normalizedInput) ||
          normalizeText(articulo.contenido).includes(normalizedInput)
      );
      this.calculatePages();
    });
  }

  private getTodos(): void {
    this.loadArticulos();
    this.loadUsuarios();
  }

  private fetchData(): void {
    if (this.selectedOption === 'Todos') {
      this.getTodos();
    } else if (this.selectedOption === 'Articulos') {
      this.loadArticulos();
    } else if (this.selectedOption === 'Usuarios') {
      this.loadUsuarios();
    }
  }

  private calculatePages(): void {
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
