import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { articulo } from '../../model/articulo';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  inputText: string = '';
  retrievedText: string | null = null;
  public miArticulo:articulo | undefined
  constructor (private articuloservice:ArticuloService){}
  getarticulos(): void {
      this.articuloservice.getArticuloById(1).subscribe((data:articulo) =>{
        this.retrievedText = this.inputText;
        // this.miArticulo = data;
        // console.log(data)
        // if(this.miArticulo.descripcion.includes(this.retrievedText)){
        //     console.log(this.articuloservice)
        // }
        console.log(this.inputText);
        // console.log(this.miArticulo)
      });
  }
  // getText(): void {
  //   this.retrievedText = this.inputText;
  //   console.log(this.inputText);
  // }
  
  // @Input() articulos: any;
}
