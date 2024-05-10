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

import com.skill_swap.entidades.Usuario;
import com.skill_swap.servicios.UsuarioServicio;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Configuración CORS a nivel de clase
@RequestMapping("api/v1/usuario")
public class UsuarioControlador {

	@Autowired
	private UsuarioServicio usuarioServicio;
	
	@GetMapping
	public ArrayList<Usuario> getUsuarios()
	{
		return this.usuarioServicio.getUsuarios();
	}
	
	@PostMapping
	public Usuario saveUsuario(@RequestBody Usuario usuario) 
	{
		return this.usuarioServicio.saveUsuario(usuario);
	}
	
	@GetMapping(path = "/{id}")
	public Optional<Usuario> getUsuarioById(@PathVariable("id") Long id)
	{
		return this.usuarioServicio.getById(id);
	}
	
	@PutMapping(path = "/{id}")
	public Usuario updateByIdPut(@RequestBody Usuario request,@PathVariable Long id)
	{
		return this.usuarioServicio.updateByIdPut(request, id);
	}

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
		usuarioServicio.deleteUsuario(id);
		return ResponseEntity.ok().build();
	}
	
}
