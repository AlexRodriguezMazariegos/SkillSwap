package com.skill_swap.controladores;

import java.io.IOException;
import java.util.ArrayList;
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
import org.springframework.web.multipart.MultipartFile;

import com.skill_swap.entidades.Usuario;
import com.skill_swap.servicios.UsuarioServicio;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Configuración CORS a nivel de clase
@RequestMapping("api/v1/usuario")
public class UsuarioControlador {

	@Autowired
	private UsuarioServicio usuarioServicio;

	@GetMapping
	public ArrayList<Usuario> getUsuarios() {
		return this.usuarioServicio.getUsuarios();
	}

	@PostMapping
	public Usuario saveUsuario(@RequestBody Usuario usuario) {
		return this.usuarioServicio.saveUsuario(usuario);
	}

	@GetMapping(path = "/{id}")
	public Optional<Usuario> getUsuarioById(@PathVariable("id") Long id) {
		return this.usuarioServicio.getById(id);
	}

	@PutMapping(path = "/{id}")
	public Usuario updateByIdPut(@RequestBody Usuario request, @PathVariable Long id) {
		return this.usuarioServicio.updateByIdPut(request, id);
	}

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
		usuarioServicio.deleteUsuario(id);
		return ResponseEntity.ok().build();
	}

	@PostMapping("/usuarios/{id}/imagen")
	public ResponseEntity<String> subirImagenDeUsuario(@PathVariable Long id,
			@RequestParam("file") MultipartFile file) {
		try {
			byte[] datosImagen = file.getBytes();
			usuarioServicio.guardarImagenDePerfilDeUsuario(id, datosImagen);
			return ResponseEntity.ok("Imagen de usuario subida correctamente.");
		} catch (IOException e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al subir la imagen de usuario.");
		}
	}

}
