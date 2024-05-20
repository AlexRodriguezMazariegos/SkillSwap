import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal.component';
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

  openDialog(): void {
    if (!this.dialogRef) { // Verifica si ya hay un diálogo abierto
      const dialogConfig = new MatDialogConfig();
      dialogConfig.panelClass = 'custom-dialog-container';
      dialogConfig.autoFocus = false;
      dialogConfig.disableClose = true;
      dialogConfig.width = '40%';
      dialogConfig.position = {
        top: '20wh',
        left: '30vw',
      };

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

  onLogoutConfirmation(confirmed: boolean): void {
    if (confirmed) {
      console.log('Cerrar sesión confirmado');
      // Implementa la lógica para cerrar la sesión aquí
    }
  }

  abrirProfile(){
    if (this.storedValue) {
      const currentUser = JSON.parse(this.storedValue);
      console.log(currentUser.id);
      this.router.navigate([`/profile/${currentUser.id}`])
      
    } else {
      this.router.navigate([``])
    }
  }

}
