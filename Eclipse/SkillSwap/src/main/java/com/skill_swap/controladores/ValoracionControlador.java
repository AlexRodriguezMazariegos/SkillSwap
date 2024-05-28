package com.skill_swap.controladores;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.skill_swap.entidades.*;
import com.skill_swap.servicios.ValoracionServicio;

@RestController
@RequestMapping("/api/v1/valoracion")
@CrossOrigin(origins = "http://localhost:4200")
public class ValoracionControlador {
	
	@Autowired
	private ValoracionServicio valoracionServicio;

	@GetMapping("")
	public ResponseEntity<List<Valoracion>> obtenerTodasLasValoraciones() {
		return ResponseEntity.status(HttpStatus.OK).body(valoracionServicio.obtenerTodasLasValoraciones());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Optional<Valoracion>> obtenerValoracionPorId(@PathVariable Long id) {
		if (valoracionServicio.obtenerValoracionPorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(valoracionServicio.obtenerValoracionPorId(id));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@PostMapping("")
	public ResponseEntity<Valoracion> guardarValoracion(@RequestBody Valoracion valoracion) {
		return ResponseEntity.status(HttpStatus.CREATED).body(valoracionServicio.crearValoracion(valoracion));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> eliminarValoracion(@PathVariable Long id) {
		if (valoracionServicio.obtenerValoracionPorId(id) == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		} else {
			valoracionServicio.eliminarValoraciono(id);
			return ResponseEntity.status(HttpStatus.OK).build();
		}
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Valoracion> actualizarValoracion(@PathVariable Long id, @RequestBody Valoracion valoracion) {
		if (valoracionServicio.obtenerValoracionPorId(id) == null) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		} else {
			Valoracion valoracionActualizada = valoracionServicio.actualizarValoracion(id, valoracion);
			if (valoracionActualizada != null) {
				return ResponseEntity.ok(valoracionActualizada);
			} else {
				return ResponseEntity.notFound().build();
			}
		}
	}
	
	@GetMapping("/valoraciones")
	public ResponseEntity<List<Valoracion>> obtenerValoracionesPorArticulo(@RequestParam Long articulo) {
	    List<Valoracion> valoraciones = valoracionServicio.obtenerValoracionPorArticulo(articulo);
	    if (!valoraciones.isEmpty()) {
	        return ResponseEntity.status(HttpStatus.OK).body(valoraciones);
	    } else {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	    }
	}

}
