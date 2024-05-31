import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
})
export class ConfirmationModalComponent {
  pregunta: string | undefined;
  textoBoton: string | undefined;
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.pregunta = data.pregunta;
    this.textoBoton = data.textoBoton;
  }

  closeDialog(confirm: boolean): void {
    this.dialogRef.close(confirm); // Cierra el diálogo con el resultado
  }

  confirmDelete(): void {
    this.closeDialog(true);
  }
}
