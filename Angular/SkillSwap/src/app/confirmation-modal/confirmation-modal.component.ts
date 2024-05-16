import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; // Importa MatDialog en lugar de MatDialogModule

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog) {} // Inyecta MatDialog en el constructor

  confirm() {
    this.confirmed.emit(true); // Emite true cuando se confirma cerrar sesión
  }

  cancel() {
    this.confirmed.emit(false); // Emite false cuando se cancela cerrar sesión
  }
}
