package com.skill_swap.controladores;

import com.skill_swap.entidades.Comentario;
import com.skill_swap.servicios.ComentarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/comentarios")
public class ComentarioControlador {

    private final ComentarioServicio comentarioServicio;

    @Autowired
    public ComentarioControlador(ComentarioServicio comentarioServicio) {
        this.comentarioServicio = comentarioServicio;
    }

    // Endpoint para obtener todos los comentarios
    @GetMapping
    public List<Comentario> obtenerTodosLosComentarios() {
        return comentarioServicio.obtenerTodosLosComentarios();
    }

    // Endpoint para obtener un comentario por su ID
    @GetMapping("/{id}")
    public Comentario obtenerComentarioPorId(@PathVariable Long id) {
        return comentarioServicio.obtenerComentarioPorId(id);
    }

    // Endpoint para crear un nuevo comentario
    @PostMapping
    public Comentario crearComentario(@RequestBody Comentario comentario) {
        return comentarioServicio.crearOActualizarComentario(comentario);
    }

    // Endpoint para actualizar un comentario existente
    @PutMapping("/{id}")
    public Comentario actualizarComentario(@PathVariable Long id, @RequestBody Comentario comentario) {
        comentario.setId_comentario(id);
        return comentarioServicio.crearOActualizarComentario(comentario);
    }

    // Endpoint para borrar un comentario por su ID
    @DeleteMapping("/{id}")
    public void borrarComentario(@PathVariable Long id) {
        comentarioServicio.borrarComentario(id);
    }
}
