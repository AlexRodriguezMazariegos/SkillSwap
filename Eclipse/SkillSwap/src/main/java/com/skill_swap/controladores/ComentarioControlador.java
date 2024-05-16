package com.skill_swap.controladores;

import com.skill_swap.entidades.Comentario;
import com.skill_swap.servicios.ComentarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/comentarios")
@CrossOrigin(origins = "http://localhost:4200")
public class ComentarioControlador {

	@Autowired
	private ComentarioServicio comentarioServicio;

	@GetMapping("")
	public List<Comentario> obtenerTodosLosComentarios() {
		return comentarioServicio.obtenerTodosLosComentarios();
	}

	// Endpoint para obtener un comentario por su ID
	@GetMapping("listar//{id}")
	public ResponseEntity<Optional<Comentario>> obtenerComentarioPorId(@PathVariable Long id) {
		if (comentarioServicio.obtenerComentarioPorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(comentarioServicio.obtenerComentarioPorId(id));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

		}
	}

	// Endpoint para crear un nuevo comentario
	@PostMapping("/crear")
	public ResponseEntity<Comentario> crearComentario(@RequestBody Comentario comentario) {
		return ResponseEntity.status(HttpStatus.CREATED).body(comentarioServicio.crearComentario(comentario));
	}

	// Endpoint para actualizar un comentario existente
	@PutMapping("/actualizar/{id}")
	public ResponseEntity<Comentario> actualizarComentario(@PathVariable Long id, @RequestBody Comentario comentario) {
		if (comentarioServicio.obtenerComentarioPorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(comentarioServicio.actualizarComentario(id, comentario));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	// Endpoint para borrar un comentario por su ID
	@DeleteMapping("/eliminar/{id}")
	public ResponseEntity<Comentario> borrarComentario(@PathVariable Long id) {
		if (comentarioServicio.obtenerComentarioPorId(id).isPresent()) {
			comentarioServicio.borrarComentario(id);
			return ResponseEntity.status(HttpStatus.OK).build();
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
}
