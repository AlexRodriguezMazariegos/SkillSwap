import { Component, Input, OnInit } from '@angular/core';
import { ArticuloService } from '../../../services/articulo/articulo.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { ComentariosService } from '../../../services/comentarios/comentarios.service';
import { response } from 'express';

@Component({
  selector: 'app-comentario-articulo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comentario-articulo.component.html',
  styleUrl: './comentario-articulo.component.css'
})
export class ComentarioArticuloComponent implements OnInit{

  @Input() miUsuario:any;
  @Input() comentario:any;
  usuario = sessionStorage.getItem('usuario');
  miPerfil: boolean = false;

  constructor (private comentarioService: ComentariosService) {}
  
  ngOnInit(): void {
    
    if (this.usuario) {
      const currentUser = JSON.parse(this.usuario);
      this.miUsuario = currentUser;
    }
    
    if (this.miUsuario.id === this.comentario.usuario.id) {
      this.miPerfil = true
    }
  }

  borrarComentario() {
    this.comentarioService.deleteComentario(this.comentario.id).subscribe({
      next: (response) => {
        console.log('Comentario borrado correctamente', response);
      },
      error: (error) => {
        console.log('Error al borrar comentario', error);
      }
    })
    window.location.reload()
    }

}
