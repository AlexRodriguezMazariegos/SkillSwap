import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../pages/confirmation-modal/confirmation-modal.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  storedValue = localStorage.getItem('usuario');

  menuOpen = false;
  dialogRef: MatDialogRef<ConfirmationModalComponent> | null = null; // Referencia al diálogo abierto

  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog(pregunta: string, textoBoton: string): void {
    if (!this.dialogRef) { // Verifica si ya hay un diálogo abierto
      const dialogConfig = new MatDialogConfig();
      dialogConfig.panelClass = 'custom-dialog-container';
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true;
      dialogConfig.width = '40%';
      dialogConfig.position = {
        top: '20vh',
        left: '30vw',
      };

      dialogConfig.data = { pregunta, textoBoton }; // Añade los datos necesarios

      this.dialogRef = this.dialog.open(ConfirmationModalComponent, dialogConfig);

      this.dialogRef.afterClosed().subscribe(result => {
        this.onLogoutConfirmation(result);
        this.dialogRef = null; // Restablece la referencia del diálogo al cerrarse
      });
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onLogoutClick() {
    this.openDialog('¿Estás seguro que deseas cerrar sesión?', 'Cerrar sesión');
  }

  onLogoutConfirmation(confirmed: boolean): void {
    if (confirmed) {
      console.log('Cerrar sesión confirmado');
      localStorage.removeItem('usuario'); // Elimina los datos del usuario del almacenamiento local
      this.router.navigate(['/']); // Redirige al usuario a la página de inicio de sesión
    }
  }

  abrirProfile() {
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

  isProfileRouteActive(): boolean {
    if (this.storedValue) {
      const currentUser = JSON.parse(this.storedValue);
      return this.router.url === `/profile/${currentUser.id}`;
    } else {
      return this.router.url === `/profile/1`;
    }
  }
}
