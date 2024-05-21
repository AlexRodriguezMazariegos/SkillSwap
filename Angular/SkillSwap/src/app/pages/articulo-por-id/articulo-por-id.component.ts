import { Component } from '@angular/core';
import { articulo } from '../../model/articulo';
import { ArticuloService } from '../../services/articulo/articulo.service';
import { ActivatedRoute, RouterModule} from '@angular/router';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";


@Component({
    selector: 'app-articulo-por-id',
    standalone: true,
    templateUrl: './articulo-por-id.component.html',
    styleUrl: './articulo-por-id.component.css',
    imports: [NavbarComponent, SidebarComponent, RouterModule]
})
export class ArticuloPorIdComponent {
  articuloPorId:articulo={
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
    description: undefined,
    title: undefined
  }

  constructor(private articuloService:ArticuloService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.articuloService.getArticuloById(id).subscribe(data => {
        this.articuloPorId = data;
        console.log(this.articuloPorId);
      });
    });
}
}