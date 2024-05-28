import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { ArticuloComponent } from '../home/articulo/articulo.component';
import { articulo } from '../../model/articulo';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from '../../shared/pagination/pagination.component';

@Component({
  selector: 'app-mis-articulos',
  standalone: true,
  templateUrl: './mis-articulos.component.html',
  styleUrl: './mis-articulos.component.css',
  imports: [
    NavbarComponent,
    SidebarComponent,
    ArticuloComponent,
    CommonModule,
    PaginationComponent,
  ],
})
export class MisArticulosComponent {
  storedValue = localStorage.getItem('usuario');
  public articulos: articulo[] = [];

  //Variables para la paginación
  public pageSize = 2;
  public currentPage = 1;
  public pages: number[] = [];

  constructor(private articuloService: ArticuloService) {}

  ngOnInit(): void {
    if (this.storedValue) {
      const currentUser = JSON.parse(this.storedValue);
      this.articuloService
        .getArticuloByUserId(currentUser.id)
        .subscribe((data: articulo[]) => {
          this.articulos = data;
          //Llamamos al metodo para la paginación
          this.calculatePages();
        });
    }
  }

  //Metodos para la paginación

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
