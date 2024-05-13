package com.skill_swap.servicios;

import com.skill_swap.entidades.Comentario;
import com.skill_swap.repositorios.ComentarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComentarioServicio {

    private final ComentarioRepositorio comentarioRepositorio;

    @Autowired
    public ComentarioServicio(ComentarioRepositorio comentarioRepositorio) {
        this.comentarioRepositorio = comentarioRepositorio;
    }

    // Método para obtener todos los comentarios
    public List<Comentario> obtenerTodosLosComentarios() {
        return comentarioRepositorio.findAll();
    }

    // Método para obtener un comentario por su ID
    public Comentario obtenerComentarioPorId(Long id) {
        Optional<Comentario> comentarioOptional = comentarioRepositorio.findById(id);
        if (comentarioOptional.isPresent()) {
            return comentarioOptional.get();
        } else {
            throw new IllegalArgumentException("Comentario no encontrado con ID: " + id);
        }
    }

    // Método para crear o actualizar un comentario
    public Comentario crearOActualizarComentario(Comentario comentario) {
        return comentarioRepositorio.save(comentario);
    }

    // Método para borrar un comentario por su ID
    public void borrarComentario(Long id) {
        comentarioRepositorio.deleteById(id);
    }
}
