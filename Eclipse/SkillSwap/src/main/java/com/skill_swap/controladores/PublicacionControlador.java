package com.skill_swap.controladores;

import com.skill_swap.entidades.Publicacion;
import com.skill_swap.servicios.PublicacionServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/publicaciones")
public class PublicacionControlador {

    private final PublicacionServicio publicacionServicio;

    @Autowired
    public PublicacionControlador(PublicacionServicio publicacionServicio) {
        this.publicacionServicio = publicacionServicio;
    }

    // Endpoint para obtener todas las publicaciones
    @GetMapping
    public List<Publicacion> obtenerTodasLasPublicaciones() {
        return publicacionServicio.obtenerTodasLasPublicaciones();
    }

    // Endpoint para obtener una publicación por su ID
    @GetMapping("/{id}")
    public Publicacion obtenerPublicacionPorId(@PathVariable Long id) {
        return publicacionServicio.obtenerPublicacionPorId(id);
    }

    // Endpoint para crear una nueva publicación
    @PostMapping
    public Publicacion crearPublicacion(@RequestBody Publicacion publicacion) {
        return publicacionServicio.crearOActualizarPublicacion(publicacion);
    }

    // Endpoint para actualizar una publicación existente
    @PutMapping("/{id}")
    public Publicacion actualizarPublicacion(@PathVariable Long id, @RequestBody Publicacion publicacion) {
        publicacion.setId(id);
        return publicacionServicio.crearOActualizarPublicacion(publicacion);
    }

    // Endpoint para borrar una publicación por su ID
    @DeleteMapping("/{id}")
    public void borrarPublicacion(@PathVariable Long id) {
        publicacionServicio.borrarPublicacion(id);
    }
}
