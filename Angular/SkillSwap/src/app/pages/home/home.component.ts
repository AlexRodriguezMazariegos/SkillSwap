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
    PaginationComponent
  ],
})
export class HomeComponent implements OnInit {
  public misUsuarios: usuario[] = [];
  public articulos: articulo[] = [];

  //Variables para la paginación
  public pageSize = 5;
  public currentPage = 1;
  public pages: number[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private articuloService: ArticuloService
  ) {}

  ngOnInit(): void {
    this.usuarioService.getusuarios().subscribe((data: usuario[]) => {
      this.misUsuarios = data;
    });
    this.articuloService.getArticulos().subscribe((data: articulo[]) => {
      this.articulos = data;
      //Llamamos al metodo para la paginación
      this.calculatePages(); 
    });
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
