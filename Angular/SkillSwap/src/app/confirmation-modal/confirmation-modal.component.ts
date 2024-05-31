import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  pregunta: string;
  textoBoton: string;
 
  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { pregunta: string, textoBoton: string }
  ) {
    this.pregunta = data.pregunta;
    this.textoBoton = data.textoBoton;
  }
 
  confirmDelete(): void {
    this.dialogRef.close(true);
  }
 
  closeDialog(result: boolean): void {
    this.dialogRef.close(result);
  }
}
 