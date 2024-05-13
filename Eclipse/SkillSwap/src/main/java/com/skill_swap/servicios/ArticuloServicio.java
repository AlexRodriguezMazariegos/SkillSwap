package com.skill_swap.servicios;

import com.skill_swap.entidades.Articulo;
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

    public Articulo obtenerArticuloPorId(Long id) {
        return articuloRepositorio.findById(id).orElse(null);
    }

    public Articulo guardarArticulo(Articulo articulo) {
        return articuloRepositorio.save(articulo);
    }

    public void eliminarArticulo(Long id) {
        articuloRepositorio.deleteById(id);
    }
}
