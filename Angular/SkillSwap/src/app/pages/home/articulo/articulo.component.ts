import { Component, Input } from '@angular/core';
import { articulo } from '../../../model/articulo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {
  @Input() articulos: any;
  constructor(private router:Router){}

  clickArticulo() {
    this.router.navigate(['/login'])
  }
}
