package com.skill_swap.servicios;

import com.skill_swap.entidades.Articulo;
import com.skill_swap.repositorios.ArticuloRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ArticuloServicio {

    private final ArticuloRepositorio articuloRepositorio;

    @Autowired
    public ArticuloServicio(ArticuloRepositorio articuloRepositorio) {
        this.articuloRepositorio = articuloRepositorio;
    }

    // Método para obtener todas las publicaciones
    public List<Articulo> obtenerTodosLosArticulos() {
        return articuloRepositorio.findAll();
    }

    // Método para obtener una publicación por su ID
    public Articulo obtenerArticuloPorId(Long id) {
        Optional<Articulo> articuloOptional = articuloRepositorio.findById(id);
        if (articuloOptional.isPresent()) {
            return articuloOptional.get();
        } else {
            throw new IllegalArgumentException("Articulo no encontrado con ID: " + id);
        }
    }

    // Método para crear o actualizar una publicación
    public Articulo crearOActualizarArticulo(Articulo articulo) {
        return articuloRepositorio.save(articulo);
    }

    // Método para borrar una publicación por su ID
    public void borrarArticulo(Long id) {
    	articuloRepositorio.deleteById(id);
    }
}
