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

  constructor (
    private articuloService: ArticuloService,
    private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.articuloService.getArticuloById(id).subscribe(data => {
        this.articuloPorId = data;
        console.log(this.articuloPorId);
      });
    });
  }
}
