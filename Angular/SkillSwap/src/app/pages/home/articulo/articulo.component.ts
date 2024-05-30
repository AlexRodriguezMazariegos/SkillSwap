import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from '../../confirmation-modal/confirmation-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ValoracionEstrellasComponent } from '../../../shared/valoracion-estrellas/valoracion-estrellas.component';
import { ArticuloService } from '../../../services/articulo/articulo.service';
import { EditorArticuloComponent } from '../../editor-articulo/editor-articulo.component';
import { ValoracionService } from '../../../services/valoracion/valoracion.service';
import { valoracion } from '../../../model/valoracion';


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
  valoraciones: valoracion[] = [];
  mediaValoraciones: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private dialog: MatDialog, 
    private router: Router,
    private articuloService: ArticuloService,
    private valoracionService: ValoracionService
  ) {}

  ngOnInit(): void {
    this.valoracionService.getValoracionesByIdByArticulo(this.articulos.id).subscribe((valoraciones: any[]) => {

      if (valoraciones && valoraciones.length > 0) {
        const sumaValoraciones = valoraciones.reduce((total, valoracion) => {
          const valor = Number(valoracion.puntuacion);
          return !isNaN(valor) ? total + valor : total; // Solo agregar si es un número válido
        }, 0);

        // Verificar que 'valoraciones.length' no sea cero antes de la división
        this.mediaValoraciones = valoraciones.length > 0 ? sumaValoraciones / valoraciones.length : 0;
      } else {
        this.mediaValoraciones = 0; 
      }
    });

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

  toggleArticulo(event:Event, id: number) {
    event.stopPropagation();
    this.articuloService.activarDesactivar(id).subscribe(
      response => {
        console.log('Artículo actualizado:', response);
        const articulo = this.articulos.find((a: { id: number; }) => a.id === id);
        if (!articulo) {
          articulo.activo = !articulo.activo;
        }
      },
      error => {
        console.error('Error al actualizar el artículo:', error);
      }
    );
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
            console.log('Artículo desactivado');
            window.location.reload(); // Recargar la página después de eliminar el artículo
          },
          error: (err) => console.error('Error desactivando el artículo', err)
        });
      } else {
        console.log('Acción cancelada');
      }
    });
  }

  obtenerValoraciones(): void {
    this.valoracionService.getValoracionesByIdByArticulo(this.articulos.id).subscribe((valoraciones: any[]) => {
      this.valoraciones = valoraciones;
    });
  }
}
