package com.skill_swap.controladores;

import com.skill_swap.entidades.Mensaje;
import com.skill_swap.servicios.MensajeServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/mensajes")
@CrossOrigin(origins = "http://localhost:4200")
public class MensajeControlador {

	@Autowired
	private MensajeServicio mensajeServicio;

	@GetMapping("")
	public List<Mensaje> obtenerTodosLosMensajes() {
		return mensajeServicio.obtenerTodosLosMensajes();
	}

	// Endpoint para obtener un mensaje por su ID
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Mensaje>> obtenerMensajePorId(@PathVariable Long id) {
		if (mensajeServicio.obtenerMensajePorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(mensajeServicio.obtenerMensajePorId(id));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

		}
	}

	// Endpoint para crear un nuevo mensaje
	@PostMapping("")
	public ResponseEntity<Mensaje> crearMensaje(@RequestBody Mensaje mensaje) {
		return ResponseEntity.status(HttpStatus.CREATED).body(mensajeServicio.crearMensaje(mensaje));
	}

	// Endpoint para actualizar un mensaje existente
	@PutMapping("/{id}")
	public ResponseEntity<Mensaje> actualizarMensaje(@PathVariable Long id, @RequestBody Mensaje mensaje) {
		if (mensajeServicio.obtenerMensajePorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(mensajeServicio.actualizarMensaje(id, mensaje));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	// Endpoint para borrar un mensaje por su ID
	@DeleteMapping("/{id}")
	public ResponseEntity<Mensaje> borrarMensaje(@PathVariable Long id) {
		if (mensajeServicio.obtenerMensajePorId(id).isPresent()) {
			mensajeServicio.borrarMensaje(id);
			return ResponseEntity.status(HttpStatus.OK).build();
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
}
