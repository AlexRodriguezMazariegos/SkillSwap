import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; 

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
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
