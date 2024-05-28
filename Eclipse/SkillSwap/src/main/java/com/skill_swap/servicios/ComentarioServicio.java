package com.skill_swap.servicios;

import com.skill_swap.entidades.Comentario;
import com.skill_swap.repositorios.ComentarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComentarioServicio {

	@Autowired
	private ComentarioRepositorio comentarioRepositorio;

	// Método para obtener todos los comentarios
	public List<Comentario> obtenerTodosLosComentarios() {
		return comentarioRepositorio.findAll();
	}

	public Optional<Comentario> obtenerComentarioPorId(Long id) {
		return comentarioRepositorio.findById(id);
	}

	// Método para crear o actualizar un comentario
	public Comentario crearComentario(Comentario comentario) {
		return comentarioRepositorio.save(comentario);
	}

	// Método para crear o actualizar un comentario
	public Comentario actualizarComentario(Long id, Comentario comentario) {
		if (comentarioRepositorio.findById(id).isPresent()) {
			Comentario comentarioAModificar = comentarioRepositorio.findById(id).get();
			// El id se queda como estaba
			comentarioAModificar.setId(id);
			comentarioAModificar.setUsuario(comentario.getUsuario());
			comentarioAModificar.setArticulo(comentario.getArticulo());
			comentarioAModificar.setTexto(comentario.getTexto());

			return comentarioRepositorio.save(comentarioAModificar);
		} else {
			return null;
		}
	}

	// Método para borrar un usuario por su ID
	public Boolean borrarComentario(Long id) {
	    if (comentarioRepositorio.existsById(id)) {
	        try {
	            comentarioRepositorio.deleteById(id);
	            return true;
	        } catch (Exception e) {
	            return false;
	        }
	    } else {
	        return false;
	    }
	}
	
	public List<Comentario> obtenerComentariosPorArticuloId(Long articuloId) {
        return comentarioRepositorio.findByArticuloId(articuloId);
    }

}
