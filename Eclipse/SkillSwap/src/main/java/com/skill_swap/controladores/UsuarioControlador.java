package com.skill_swap.controladores;

import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.skill_swap.entidades.Usuario;
import com.skill_swap.servicios.UsuarioServicio;

@RestController
@RequestMapping("api/v1/usuario")
public class UsuarioControlador {

	@Autowired
	private UsuarioServicio usuarioServicio;

	@GetMapping("")
	public List<Usuario> obtenerTodosLosUsuarios() {
		return usuarioServicio.obtenerTodosLosUsuarios();
	}

	// Endpoint para obtener un usuario por su ID
	@GetMapping("listar//{id}")
	public ResponseEntity<Optional<Usuario>> obtenerUsuarioPorId(@PathVariable Long id) {
		if (usuarioServicio.obtenerUsuarioPorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(usuarioServicio.obtenerUsuarioPorId(id));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

		}
	}

	// Endpoint para crear un nuevo usuario
	@PostMapping("/crear")
	public ResponseEntity<Usuario> crearUsuario(@RequestBody Usuario usuario) {
		return ResponseEntity.status(HttpStatus.CREATED).body(usuarioServicio.crearUsuario(usuario));
	}

	// Endpoint para actualizar un usuario existente
	@PutMapping("/actualizar/{id}")
	public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id, @RequestBody Usuario usuario) {
		if (usuarioServicio.obtenerUsuarioPorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(usuarioServicio.actualizarUsuario(id, usuario));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	// Endpoint para borrar un usuario por su ID
	@DeleteMapping("/eliminar/{id}")
	public ResponseEntity<Usuario> borrarUsuario(@PathVariable Long id) {
		if (usuarioServicio.obtenerUsuarioPorId(id).isPresent()) {
			usuarioServicio.borrarUsuario(id);
			return ResponseEntity.status(HttpStatus.OK).build();
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}


}
