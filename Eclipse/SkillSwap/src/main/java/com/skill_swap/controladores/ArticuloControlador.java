package com.skill_swap.controladores;

import com.skill_swap.entidades.Articulo;
import com.skill_swap.servicios.ArticuloServicio;
import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/articulo")
@CrossOrigin(origins = "http://localhost:4200")
public class ArticuloControlador {

	@Autowired
	private ArticuloServicio articuloServicio;

	@GetMapping("")
	public ResponseEntity<List<Articulo>> obtenerTodosLosArticulos() {
		return ResponseEntity.status(HttpStatus.OK).body(articuloServicio.obtenerTodosLosArticulos());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<Articulo>> obtenerArticuloPorId(@PathVariable Long id) {
		if (articuloServicio.obtenerArticuloPorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(articuloServicio.obtenerArticuloPorId(id));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@GetMapping("/usuario/{id}")
    public ResponseEntity<List<Articulo>> obtenerArticulosPorUsuario(@PathVariable Long id) {
        List<Articulo> articulos = articuloServicio.obtenerArticulosPorUsuario(id);
        if (!articulos.isEmpty()) {
            return ResponseEntity.status(HttpStatus.OK).body(articulos);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

	@PostMapping("")
	public ResponseEntity<Articulo> guardarArticulo(@RequestBody Articulo articulo) {
		return ResponseEntity.status(HttpStatus.CREATED).body(articuloServicio.crearArticulo(articulo));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> eliminarArticulo(@PathVariable Long id) {
		if (articuloServicio.obtenerArticuloPorId(id) == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		} else {
			articuloServicio.eliminarArticulo(id);
			return ResponseEntity.status(HttpStatus.OK).build();
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Articulo> actualizarArticulo(@PathVariable Long id, @RequestBody Articulo articulo) {
		if (articuloServicio.obtenerArticuloPorId(id) == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		} else {
			Articulo articuloActualizado = articuloServicio.actualizarArticulo(id, articulo);
			if (articuloActualizado != null) {
				return ResponseEntity.ok(articuloActualizado);
			} else {
				return ResponseEntity.notFound().build();
			}
		}
	}

}
