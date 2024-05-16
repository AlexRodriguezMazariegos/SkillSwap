import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-usuario',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-usuario.component.html',
  styleUrl: './tarjeta-usuario.component.css'
})
export class TarjetaUsuarioComponent {
  @Input() miUsuario: any;

  ngOnInit(): void {

  }
}