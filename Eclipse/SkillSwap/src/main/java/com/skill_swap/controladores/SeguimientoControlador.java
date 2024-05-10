package com.skill_swap.controladores;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skill_swap.entidades.Seguimiento;
import com.skill_swap.servicios.SeguimientoServicio;


@RestController
@CrossOrigin(origins = "http://localhost:4200") // Configuración CORS a nivel de clase
@RequestMapping("api/v1/seguimiento")
public class SeguimientoControlador {


	@Autowired
	private SeguimientoServicio seguimientoServicio;
	
	@GetMapping
	public ArrayList<Seguimiento> getSeguimientos()
	{
		return this.seguimientoServicio.getSeguimientos();
	}
	
	@PostMapping
	public Seguimiento saveSeguimiento(@RequestBody Seguimiento seguimiento) 
	{
		return this.seguimientoServicio.saveSeguimiento(seguimiento);
	}
	
	@GetMapping(path = "/{id}")
	public Optional<Seguimiento> getSeguimientoById(@PathVariable("id") Long id)
	{
		return this.seguimientoServicio.getById(id);
	}
	
	@PutMapping(path = "/{id}")
	public Seguimiento updateByIdPut(@RequestBody Seguimiento request,@PathVariable Long id)
	{
		return this.seguimientoServicio.updateByIdPut(request, id);
	}

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
		seguimientoServicio.deleteSeguimiento(id);
		return ResponseEntity.ok().build();
	}

}
