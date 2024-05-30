import { Component, Input, OnInit, Output } from '@angular/core';
import { articulo } from '../../model/articulo';
import { valoracion } from '../../model/valoracion';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ValoracionEstrellasComponent } from '../../shared/valoracion-estrellas/valoracion-estrellas.component';
import { ValoracionService } from '../../services/valoracion/valoracion.service';
import { usuario } from '../../model/usuario';
import { formatDate } from '@angular/common';

import { ComentarioArticuloComponent } from "./comentario-articulo/comentario-articulo.component";
import { AdjuntarComentarioComponent } from "./adjuntar-comentario/adjuntar-comentario.component";


@Component({
    selector: 'app-articulo-por-id',
    standalone: true,
    templateUrl: './articulo-por-id.component.html',
    styleUrls: ['./articulo-por-id.component.css'],
    imports: [
        NavbarComponent,
        SidebarComponent,
        ValoracionEstrellasComponent,
        RouterModule,
        ComentarioArticuloComponent,
        AdjuntarComentarioComponent
    ]
})
export class ArticuloPorIdComponent implements OnInit {
  storedValue = sessionStorage.getItem('usuario');
  miUsuario!: usuario;
  puntuacion: number = 0;
  valoracionExistente: boolean = false;
  valoracionId: number | undefined;

  articuloPorId: articulo = {
    id: 0,
    usuario: {
      id: 0,
      nombre: '',
      apellido: '',
      email: '',
      contrasena: '',
      urlGitHub: '',
      puestoEmpresa: '',
      skills: [],
      fotoDePerfil: ''
    },
    contenido: '',
    descripcion: '',
    titulo: '',
    fechaPublicacion: new Date(),
    comentarios: []
  };

  fechaPublicacionFormateada: string = '';
  sanitizedContent: SafeHtml | undefined;
  
  constructor(
    private articuloService: ArticuloService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private valoracionService: ValoracionService
  ) {}

  ngOnInit(): void {
    if (this.storedValue) {
      const currentUser = JSON.parse(this.storedValue);
      this.miUsuario = currentUser;
    }
  
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.articuloService.getArticuloById(id).subscribe((data) => {
        this.articuloPorId = data;
        this.fechaPublicacionFormateada = this.formatDate(this.articuloPorId.fechaPublicacion);
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.articuloPorId.contenido);

        this.valoracionService.obtenerValoracion(this.articuloPorId.id, this.miUsuario.id)
        .subscribe((valoracion: valoracion | null) => {
          if (valoracion) {
            this.valoracionExistente = true;
            this.puntuacion = valoracion.puntuacion;
            this.valoracionId = valoracion.id;
          }
        });
      });
    });
  }

  onStarClicked(rating: number): void {
    const valoracion: valoracion = {
      id: this.valoracionId ?? 0, // Si this.valoracionId es undefined, usa 0
      puntuacion: rating,
      usuario: this.miUsuario,
      articulo: this.articuloPorId,
    };
  
    this.valoracionService.saveOrUpdateValoracion(valoracion).subscribe(
      (response) => {
        console.log('Valoración guardada/actualizada:', response);
      },
      (error) => {
        console.error('Error al guardar/actualizar la valoración:', error);
      }
    );
  }

  formatDate(fecha: Date): string {
    return formatDate(fecha, 'dd-MM-yyyy', 'en-US');
  }
}
