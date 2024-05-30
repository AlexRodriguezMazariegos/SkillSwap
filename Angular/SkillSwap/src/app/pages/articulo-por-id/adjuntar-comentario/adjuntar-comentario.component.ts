import { Component, Input, OnInit } from '@angular/core';
import { ComentariosService } from '../../../services/comentarios/comentarios.service';
import { usuario } from '../../../model/usuario';
import { comentario } from '../../../model/comentario';
import { articulo } from '../../../model/articulo';
import { ArticuloService } from '../../../services/articulo/articulo.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adjuntar-comentario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adjuntar-comentario.component.html',
  styleUrl: './adjuntar-comentario.component.css'
})
export class AdjuntarComentarioComponent implements OnInit{
  storedValue = localStorage.getItem('usuario');
  miUsuario!: usuario;
  texto: string = '';
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

  constructor(private comentariosService: ComentariosService, private articuloService: ArticuloService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.storedValue) {
      const currentUser = JSON.parse(this.storedValue); 
      this.miUsuario = currentUser;
    }

    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.articuloService.getArticuloById(id).subscribe((data) => {
        this.articuloPorId = data;
      });
    });  
  }

enviarComentario() {
  const comentario: comentario = {
    id: 0,
    usuario: this.miUsuario,
    articulo: this.articuloPorId,
    fecha: new Date(),
    texto: this.texto
  }
  
  this.comentariosService.postComentario(comentario, comentario.usuario.id, comentario.articulo.id).subscribe({
    next: (response) => {
      console.log('Comentario introducido correctamente', response);
    },
    error: (error) => {
      console.error('Error al introducir el comentario', error);
    }
  });
  window.location.reload()
}

}