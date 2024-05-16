import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onLogoutConfirmation(confirmed: boolean) {
    if (confirmed) {
      // Aquí colocarás la lógica para cerrar la sesión
      console.log('Cerrar sesión confirmado');
    }
  }
}
