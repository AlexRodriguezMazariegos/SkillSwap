import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ValoracionEstrellasComponent } from '../../../shared/valoracion-estrellas/valoracion-estrellas.component';
import { ArticuloService } from '../../../services/articulo/articulo.service';
import { EditorArticuloComponent } from '../../editor-articulo/editor-articulo.component';


@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [CommonModule, ValoracionEstrellasComponent],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css',
})
export class ArticuloComponent implements OnInit {
  currentRoute: string = '';
  @Input() articulos: any;
  dialogRef: MatDialogRef<ConfirmationModalComponent> | null = null;

  constructor(
    private route: ActivatedRoute, 
    private dialog: MatDialog, 
    private router: Router,
    private articuloService: ArticuloService
  ) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
    console.log(this.currentRoute);
  }

  clickArticulo() {
    this.router.navigate([`/articulo/${this.articulos.id}`]);
  }

  clickPerfil(event: Event) {
    event.stopPropagation();
    this.router.navigate([`/profile/${this.articulos.usuario.id}`]);
  }

  deleteArticuloDialog(event: Event) {
    event.stopPropagation();
    this.openDialog('¿Deseas eliminar este elemento?', 'Eliminar', this.articulos.id);
  }

  editArticulo(event: Event) {
    event.stopPropagation();
    this.router.navigate([`/editar-articulo/${this.articulos.id}`]);
  }

  openDialog(pregunta: string = '¿Estás seguro que deseas eliminar el artículo?', textoBoton: string = 'Borrar artículo', id: number): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {
        pregunta: pregunta,
        textoBoton: textoBoton,
        id: id
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.articuloService.deleteArticulo(id).subscribe({
          next: () => {
            console.log('Artículo eliminado');
            window.location.reload(); // Recargar la página después de eliminar el artículo
          },
          error: (err) => console.error('Error eliminando artículo', err)
        });
      } else {
        console.log('Acción cancelada');
      }
    });
  }
}
