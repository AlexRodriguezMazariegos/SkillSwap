import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-valoracion-estrellas',
  standalone: true,
  templateUrl: './valoracion-estrellas.component.html',
  styleUrl: './valoracion-estrellas.component.css'
})
export class ValoracionEstrellasComponent {
  @Input() puntuacion: number | undefined;
  @Output() starClicked = new EventEmitter<number>();

  ngOnInit(){
    console.log(this.puntuacion)
  }

  onStarClick(rating: number): void {
    this.starClicked.emit(rating);
  }
}
