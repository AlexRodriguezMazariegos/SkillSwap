package com.skill_swap.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.skill_swap.entidades.Articulo;
import com.skill_swap.servicios.ArticuloServicio;
import java.util.List;

@RestController
@RequestMapping("/api/v1/publicaciones")
public class ArticuloControlador {

    private final ArticuloServicio articuloServicio;

    @Autowired
    public ArticuloControlador(ArticuloServicio articuloServicio) {
        this.articuloServicio = articuloServicio;
    }

    // Endpoint para obtener todas las publicaciones
    @GetMapping
    public List<Articulo> obtenerTodosLosArticulos() {
        return articuloServicio.obtenerTodosLosArticulos();
    }

    //hola
    // Endpoint para obtener una publicación por su ID
    @GetMapping("/{id}")
    public Articulo obtenerArticuloPorId(@PathVariable Long id) {
        return articuloServicio.obtenerArticuloPorId(id);
    }

    // Endpoint para crear una nueva publicación
    @PostMapping
    public Articulo crearArticulo(@RequestBody Articulo articulo) {
        return articuloServicio.crearOActualizarArticulo(articulo);
    }

    // Endpoint para actualizar una publicación existente
    @PutMapping("/{id}")
    public Articulo actualizarArticulo(@PathVariable Long id, @RequestBody Articulo articulo) {
    	articulo.setId(id);
        return articuloServicio.crearOActualizarArticulo(articulo);
    }

    // Endpoint para borrar una publicación por su ID
    @DeleteMapping("/{id}")
    public void borrarArticulo(@PathVariable Long id) {
    	articuloServicio.borrarArticulo(id);
    }
}
