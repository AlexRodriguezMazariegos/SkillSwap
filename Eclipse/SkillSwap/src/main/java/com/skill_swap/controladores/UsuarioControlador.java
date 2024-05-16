package com.skill_swap.controladores;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.net.MalformedURLException;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
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

	@GetMapping("/usuarios/{id}/imagen")
	public ResponseEntity<Resource> obtenerImagenDePerfil(@PathVariable Long id) {
	    // Obtener el usuario por ID
	    Usuario usuario = usuarioServicio.getById(id).orElse(null);
	    
	    // Verificar si el usuario existe y si tiene una foto de perfil asociada
	    if (usuario == null || usuario.getFotoDePerfil() == null) {
	        return ResponseEntity.notFound().build(); // Devolver 404 Not Found si no se encuentra el usuario o no tiene foto de perfil
	    }

	    String fotoNombre = usuario.getFotoDePerfil();
	    
	    try {
	        // Construir la ruta donde se almacena la imagen de perfil del usuario
	        Path path = Paths.get("/SkillSwap/src/main/resources/img", fotoNombre);
	        
	        // Crear un recurso a partir de la URL de la imagen de perfil
	        Resource resource = new UrlResource(path.toUri());

	        // Verificar si el recurso existe y es legible
	        if (resource.exists() || resource.isReadable()) {
	            // Devolver la imagen de perfil con el tipo de contenido adecuado
	            return ResponseEntity.ok()
	                .contentType(MediaType.IMAGE_JPEG) // Ajustar el tipo de contenido según el tipo de imagen
	                .body(resource);
	        } else {
	            // Devolver un error 500 si la imagen no existe o no se puede leer
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	        }
	    } catch (MalformedURLException e) {
	        // Devolver un error 500 si hay un error al construir la URL de la imagen
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }
	}


}
