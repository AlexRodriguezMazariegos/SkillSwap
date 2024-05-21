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
  public miArticulo:articulo | undefined;
  constructor (private articuloservice:ArticuloService){}
  getarticulos(): void {
    for (let i = 1; i < 9; i++) {
        this.articuloservice.getArticuloById(i).subscribe((data: articulo) => {
            this.retrievedText = this.inputText;
            // console.log(data);
            if (data.contenido.includes(this.inputText) || data.titulo.includes(this.inputText)) {
                // console.log("Esta");
                console.log(data);
            } else {
                // console.log("no esta");
            }
        });
    }
}
}
