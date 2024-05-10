package com.skill_swap.servicios;

import com.skill_swap.entidades.Publicacion;
import com.skill_swap.repositorios.PublicacionRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PublicacionServicio {

    private final PublicacionRepositorio publicacionRepositorio;

    @Autowired
    public PublicacionServicio(PublicacionRepositorio publicacionRepositorio) {
        this.publicacionRepositorio = publicacionRepositorio;
    }

    // Método para obtener todas las publicaciones
    public List<Publicacion> obtenerTodasLasPublicaciones() {
        return publicacionRepositorio.findAll();
    }

    // Método para obtener una publicación por su ID
    public Publicacion obtenerPublicacionPorId(Long id) {
        Optional<Publicacion> publicacionOptional = publicacionRepositorio.findById(id);
        if (publicacionOptional.isPresent()) {
            return publicacionOptional.get();
        } else {
            throw new IllegalArgumentException("Publicación no encontrada con ID: " + id);
        }
    }

    // Método para crear o actualizar una publicación
    public Publicacion crearOActualizarPublicacion(Publicacion publicacion) {
        return publicacionRepositorio.save(publicacion);
    }

    // Método para borrar una publicación por su ID
    public void borrarPublicacion(Long id) {
        publicacionRepositorio.deleteById(id);
    }
}
