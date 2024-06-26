package com.skill_swap.controladores;

import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.skill_swap.entidades.Articulo;
import com.skill_swap.entidades.Comentario;
import com.skill_swap.servicios.ArticuloServicio;
import com.skill_swap.servicios.ComentarioServicio;
import static org.springframework.web.bind.annotation.RequestMethod.*;


@RestController
@RequestMapping("/api/v1/articulo")
@CrossOrigin(origins = "http://localhost:4200", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.PATCH, RequestMethod.DELETE, RequestMethod.OPTIONS })
public class ArticuloControlador {

	@Autowired
	private ArticuloServicio articuloServicio;
	
	@Autowired
	private ComentarioServicio comentarioServicio;

	@GetMapping("")
	public ResponseEntity<List<Articulo>> obtenerTodosLosArticulos() {
		return ResponseEntity.status(HttpStatus.OK).body(articuloServicio.obtenerTodosLosArticulos());
	}

	@GetMapping("/activos")
	public ResponseEntity<List<Articulo>> obtenerTodosLosArticulosActivos() {
		return ResponseEntity.status(HttpStatus.OK).body(articuloServicio.obtenerTodosLosArticulosActivos());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<Articulo>> obtenerArticuloPorId(@PathVariable Long id) {
		Optional<Articulo> articulo = articuloServicio.obtenerArticuloPorId(id);
		if (articulo.isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(articulo);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	@GetMapping("/activos/{id}")
	public ResponseEntity<Optional<Articulo>> obtenerArticuloActivoPorId(@PathVariable Long id) {
		Optional<Articulo> articulo = articuloServicio.obtenerArticuloActivoPorId(id);
		if (articulo.isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(articulo);
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
		articulo.setActivo(true);
		return ResponseEntity.status(HttpStatus.CREATED).body(articuloServicio.crearArticulo(articulo));
	}

	@PatchMapping("/{id}")
    public ResponseEntity<Articulo> patchearArticulo(@PathVariable Long id) {
        return articuloServicio.obtenerArticuloPorId(id)
                .map(articulo -> {
                    articulo.setActivo(!articulo.getActivo());
                    Articulo actualizado = articuloServicio.crearArticulo(articulo);
                    return ResponseEntity.ok(actualizado);
                })
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
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

	@GetMapping("/{id}/comentarios")
	public ResponseEntity<List<Comentario>> obtenerComentariosPorArticuloId(@PathVariable Long id) {
	    List<Comentario> comentarios = comentarioServicio.obtenerComentariosPorArticuloId(id);
	    System.out.println("Comentarios encontrados: " + comentarios.size());
	    if (!comentarios.isEmpty()) {
	        return ResponseEntity.status(HttpStatus.OK).body(comentarios);
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	    }
	}


}
