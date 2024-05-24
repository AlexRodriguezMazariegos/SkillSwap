import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../pages/confirmation-modal/confirmation-modal.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  storedValue = localStorage.getItem('usuario');

  menuOpen = false;
  dialogRef: MatDialogRef<ConfirmationModalComponent> | null = null; // Referencia al diálogo abierto
  
  constructor(public dialog: MatDialog, private router: Router) { }

  openDialog(pregunta: string = '¿Estás seguro que deseas salir?', textoBoton: string = 'Salir'): void {
    this.dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {
        pregunta: pregunta,
        textoBoton: textoBoton
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.onLogoutConfirmation(result);
    });
  }

  onLogoutClick() {
    this.openDialog('¿Estás seguro que deseas cerrar sesión?', 'Cerrar sesión');
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onLogoutConfirmation(confirmed: boolean): void {
    if (confirmed) {
      console.log('Cerrar sesión confirmado');
      // Lógica para cerrar sesión
      localStorage.removeItem('usuario'); // Elimina los datos del usuario del almacenamiento local
      this.router.navigate(['/']); // Redirige al usuario a la página de inicio de sesión
    }
  }

  abrirProfile(){
    if (this.storedValue) {
      const currentUser = JSON.parse(this.storedValue);
      console.log(currentUser.id);
      this.router.navigate([`/profile/${currentUser.id}`]);
    } else {
      this.router.navigate([``]);
    }
  }

  isRouteActive(route: string): boolean {
    return this.router.url.startsWith(route);
  }
}
