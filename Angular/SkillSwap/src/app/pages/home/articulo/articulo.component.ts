import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ValoracionEstrellasComponent } from '../../../shared/valoracion-estrellas/valoracion-estrellas.component';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CommonModule, ValoracionEstrellasComponent],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css',
})
export class ArticuloComponent implements OnInit{
  currentRoute: string = '';
  @Input() articulos: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.currentRoute = this.router.url;
      console.log(this.currentRoute);
  }

  clickArticulo() {
    this.router.navigate([`/articulo/${this.articulos.id}`]);
  }

  clickPerfil(event: Event) {
    event.stopPropagation();
    // Lógica para cuando se hace clic en la foto del usuario, por ejemplo, navegar al perfil del usuario
    console.log('Navegar al perfil del usuario');
    this.router.navigate([`/profile/${this.articulos.usuario.id}`]);
  }

  deleteArticulo($event: MouseEvent) {
    throw new Error('Method not implemented.');
  }
  editArticulo($event: MouseEvent) {
    throw new Error('Method not implemented.');
  }
}
