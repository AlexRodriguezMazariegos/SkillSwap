import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  usuario = localStorage.getItem('usuario');
  nombreUsuario = '';
  imagenUsuario = '';

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    if (this.usuario) {
      const currentUser = JSON.parse(this.usuario);
      this.nombreUsuario = currentUser.nombre;
      this.imagenUsuario = currentUser.fotoDePerfil;
    }
  }
  abrirProfile() {
    if (this.usuario) {
      const currentUser = JSON.parse(this.usuario);
      this.router.navigate([`/profile/${currentUser.id}`]);
    } else {
      this.router.navigate([``]);
    }
  }
}
