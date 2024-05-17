import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'; 
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuOpen = false;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'custom-dialog-container';
    dialogConfig.autoFocus = false;
    dialogConfig.width = '40%';
    dialogConfig.position = {
      top: '0', // Centra verticalmente en el 50% de la pantalla (viewport height)
      left: '30vw', // Centra horizontalmente en el 50% de la pantalla (viewport width)
    };

    const dialogRef = this.dialog.open(ConfirmationModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.onLogoutConfirmation(result); // Maneja el resultado del diálogo al cerrarse
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onLogoutConfirmation(confirmed: boolean): void {
    if (confirmed) {
      console.log('Cerrar sesión confirmado');
      // Aquí puedes implementar la lógica para cerrar la sesión
    }
  }
}
