package com.skill_swap.servicios;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.skill_swap.entidades.Usuario;
import com.skill_swap.repositorios.UsuarioRepositorio;

@Service
public class UsuarioServicio {

	@Autowired
	UsuarioRepositorio usuarioRepositorio;

	// Método para obtener todos los usuarios
	public List<Usuario> obtenerTodosLosUsuarios() {
		return usuarioRepositorio.findAll();
	}

	public Optional<Usuario> obtenerUsuarioPorId(Long id) {
		return usuarioRepositorio.findById(id);
	}

	// Método para crear o actualizar un usuario
	public Usuario crearUsuario(Usuario usuario) {
		return usuarioRepositorio.save(usuario);
	}

	// Método para crear o actualizar un usuario
	public Usuario actualizarUsuario(Long id, Usuario usuario) {
		try {
			Usuario usuarioAModificar = usuarioRepositorio.findById(id).get();
			// El id se queda como estaba
			usuarioAModificar.setId(id);
			usuarioAModificar.setNombre(usuario.getNombre());
			usuarioAModificar.setApellido(usuario.getApellido());
			usuarioAModificar.setEmail(usuario.getEmail());
			usuarioAModificar.setFotoDePerfil(usuario.getFotoDePerfil());
			usuarioAModificar.setContrasena(usuario.getContrasena());
			usuarioAModificar.setUrlGitHub(usuario.getUrlGitHub());
			usuarioAModificar.setSkills(usuario.getSkills());
			return usuarioRepositorio.save(usuarioAModificar);
		} catch (NoSuchElementException e) {
			// Manejo de la excepción si el usuario no existe
			return null;
		}
	}


	// Método para borrar un usuario por su ID
	public Boolean borrarUsuario(Long id) {
		{
			try {
				usuarioRepositorio.deleteById(id);
				return true;
			} catch (Exception e) {
				return false;
			}
		}
	}

	public Boolean FindByEmail(String email) {
		if (usuarioRepositorio.findByEmail(email)!= null) {
			return true;
		}
		else {
			return false;
		}
	}

	public Usuario login(String email, String contrasena) {
		return usuarioRepositorio.login(email, contrasena);
	}

	public Usuario obtenerUsuarioPorNombre(String nombre) {
		return usuarioRepositorio.findByNombre(nombre);
	}


}
