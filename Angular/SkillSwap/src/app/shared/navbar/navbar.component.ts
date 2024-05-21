import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  
  usuario = localStorage.getItem('usuario')
  nombreUsuario = ''
  imagenUsuario = ''
  
  ngOnInit(): void {
  
    if (this.usuario) {
      const currentUser = JSON.parse(this.usuario);
      this.nombreUsuario = currentUser.nombre
      this.imagenUsuario = currentUser.fotoDePerfil
      console.log();
      
    } 
}
}
