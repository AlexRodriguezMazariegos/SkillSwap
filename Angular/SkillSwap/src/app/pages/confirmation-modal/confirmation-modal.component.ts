import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
})
export class ConfirmationModalComponent {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private dialog: MatDialogRef<ConfirmationModalComponent>, private router:Router) {} // Inyecta MatDialog en el constructor

  closeDialog(): void {
    this.dialog.close(); // Cierra el diálogo
  }

  logout(): void {
    // Aquí colocarías la lógica para cerrar la sesión
    localStorage.clear()
    console.log('Cerrar sesión');
    this.router.navigate(['']); 
    // Después de cerrar la sesión, cierra el diálogo
    this.dialog.close();
  }
}
