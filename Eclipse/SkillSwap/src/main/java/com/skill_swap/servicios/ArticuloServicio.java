package com.skill_swap.servicios;

import com.skill_swap.entidades.Articulo;
import java.util.Optional;

import com.skill_swap.repositorios.ArticuloRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticuloServicio {

    @Autowired
    private ArticuloRepositorio articuloRepositorio;

    public List<Articulo> obtenerTodosLosArticulos() {
        return articuloRepositorio.findAll();
    }

    public Optional<Articulo> obtenerArticuloPorId(Long id) {
        return articuloRepositorio.findById(id);
    }

    public Articulo crearArticulo(Articulo articulo) {
        return articuloRepositorio.save(articulo);
    }

    public void eliminarArticulo(Long id) {
        articuloRepositorio.deleteById(id);
    }
    
    
    public Articulo actualizarArticulo(Long id, Articulo articulo) {
        Optional<Articulo> articuloExistente = articuloRepositorio.findById(id);

        if (articuloExistente.isPresent()) {
            Articulo articuloActualizado = articuloExistente.get();
            articuloActualizado.setUsuario(articulo.getUsuario());
            articuloActualizado.setContenido(articulo.getContenido());
            articuloActualizado.setDescripcion(articulo.getDescripcion());
            articuloActualizado.setTitulo(articulo.getTitulo());
            articuloActualizado.setFechaPublicacion(articulo.getFechaPublicacion());

            return articuloRepositorio.save(articuloActualizado);
        } else {
            return null;
        }
    }
    
    
    
}
