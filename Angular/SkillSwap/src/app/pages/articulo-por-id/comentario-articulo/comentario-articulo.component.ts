import { Component, Input, OnInit } from '@angular/core';
import { ArticuloService } from '../../../services/articulo/articulo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentario-articulo',
  standalone: true,
  imports: [],
  templateUrl: './comentario-articulo.component.html',
  styleUrl: './comentario-articulo.component.css'
})
export class ComentarioArticuloComponent implements OnInit{
  @Input() articuloPorId:any;

  constructor () {}
  
  ngOnInit(): void {
        console.log(this.articuloPorId);
  }
}
