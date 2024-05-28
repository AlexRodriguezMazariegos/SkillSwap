import { Component, Input, OnInit } from '@angular/core';
import { ArticuloService } from '../../../services/articulo/articulo.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comentario-articulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comentario-articulo.component.html',
  styleUrl: './comentario-articulo.component.css'
})
export class ComentarioArticuloComponent implements OnInit{
  @Input() comentario:any;

  constructor (
    private articuloService: ArticuloService,
    private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    console.log(this.comentario);
    
  }
}
