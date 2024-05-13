package com.skill_swap.controladores;

import com.skill_swap.entidades.Articulo;
import com.skill_swap.servicios.ArticuloServicio;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/articulo")
public class ArticuloControlador {

    @Autowired
    private ArticuloServicio articuloServicio;

    @GetMapping
    public ResponseEntity<List<Articulo>> obtenerTodosLosArticulos() {
        return ResponseEntity.ok(articuloServicio.obtenerTodosLosArticulos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Articulo> obtenerArticuloPorId(@PathVariable Long id) {
        return ResponseEntity.ok(articuloServicio.obtenerArticuloPorId(id));
    }

    @PostMapping
    public ResponseEntity<Articulo> guardarArticulo(@RequestBody Articulo articulo) {
        return ResponseEntity.ok(articuloServicio.guardarArticulo(articulo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarArticulo(@PathVariable Long id) {
        articuloServicio.eliminarArticulo(id);
        return ResponseEntity.ok().build();
    }
}
