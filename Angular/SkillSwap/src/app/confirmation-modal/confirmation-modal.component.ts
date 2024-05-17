import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; 

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private dialog: MatDialogRef<ConfirmationModalComponent>) {} // Inyecta MatDialog en el constructor

  closeDialog(): void {
    this.dialog.close(); // Cierra el diálogo
  }

  logout(): void {
    // Aquí colocarías la lógica para cerrar la sesión
    console.log('Cerrar sesión');
    // Después de cerrar la sesión, cierra el diálogo
    this.dialog.close();
  }
}
