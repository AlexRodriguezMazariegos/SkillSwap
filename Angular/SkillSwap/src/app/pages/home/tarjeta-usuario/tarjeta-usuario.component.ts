import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-usuario',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-usuario.component.html',
  styleUrl: './tarjeta-usuario.component.css',
})
export class TarjetaUsuarioComponent {
  @Input() miUsuario: any;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  clickPerfil() {
    this.router.navigate([`/profile/${this.miUsuario.id}`]);
  }
}
