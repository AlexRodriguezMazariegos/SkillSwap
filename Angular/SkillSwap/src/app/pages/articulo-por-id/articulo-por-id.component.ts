import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { articulo } from '../../model/articulo';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { ActivatedRoute, RouterModule} from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ValoracionEstrellasComponent } from '../../shared/valoracion-estrellas/valoracion-estrellas.component';

@Component({
    selector: 'app-articulo-por-id',
    standalone: true,
    templateUrl: './articulo-por-id.component.html',
    styleUrl: './articulo-por-id.component.css',
    imports: [NavbarComponent, SidebarComponent, ValoracionEstrellasComponent,RouterModule]
})
export class ArticuloPorIdComponent implements OnInit {
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
  };

  sanitizedContent: SafeHtml | undefined;

  constructor(
      private articuloService: ArticuloService,
      private route: ActivatedRoute,
      private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
          const id = params['id'];
          this.articuloService.getArticuloById(id).subscribe(data => {
              this.articuloPorId = data;
              this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.articuloPorId.contenido);
              console.log(this.articuloPorId);
          });
      });
  }
}