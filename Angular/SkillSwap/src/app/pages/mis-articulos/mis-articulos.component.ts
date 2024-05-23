import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { ArticuloComponent } from '../home/articulo/articulo.component';
import { articulo } from '../../model/articulo';
import { usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ArticuloService } from '../../services/articulo/articulo.service';

@Component({
  selector: 'app-mis-articulos',
  standalone: true,
  templateUrl: './mis-articulos.component.html',
  styleUrl: './mis-articulos.component.css',
  imports: [NavbarComponent, SidebarComponent, ArticuloComponent],
})
export class MisArticulosComponent {
  storedValue = localStorage.getItem('usuario');

  public articulos: articulo[] = [];
  constructor(private articuloService: ArticuloService) {}

  ngOnInit(): void {
    if (this.storedValue) {
      const currentUser = JSON.parse(this.storedValue);
      this.articuloService
        .getArticuloByUserId(currentUser.id)
        .subscribe((data: articulo[]) => {
          this.articulos = data;
        });
    }
  }
}
