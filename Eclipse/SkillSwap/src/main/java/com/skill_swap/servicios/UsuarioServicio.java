package com.skill_swap.servicios;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skill_swap.entidades.Usuario;
import com.skill_swap.repositorios.UsuarioRepositorio;

import jakarta.transaction.Transactional;

@Service
public class UsuarioServicio {

	@Autowired
	UsuarioRepositorio usuarioRepositorio;

	public ArrayList<Usuario> getUsuarios() {
		return (ArrayList<Usuario>) usuarioRepositorio.findAll();
	}

	public Usuario saveUsuario(Usuario usuario) {
		return usuarioRepositorio.save(usuario);
	}

	public Optional<Usuario> getById(Long id) {
		return usuarioRepositorio.findById(id);
	}

	public Usuario updateByIdPut(Usuario request, Long id) {
		Usuario usuario = usuarioRepositorio.findById(id).get();
		// FALTA HABILIDAD
		usuario.setNombre(request.getNombre());
		usuario.setApellido(request.getApellido());
		usuario.setEmail(request.getEmail());
		usuario.setContrasena(request.getContrasena());
		usuario.setUrlGitHub(request.getUrlGitHub());
		usuario.setPuestoEmpresa(request.getPuestoEmpresa());
		usuarioRepositorio.save(usuario);
		return usuario;
	}

	public Boolean deleteUsuario(Long id) {
		try {
			usuarioRepositorio.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	 @Transactional
	    public void guardarImagenDePerfilDeUsuario(Long idUsuario, byte[] datosImagen) {
	        Optional<Usuario> usuarioOptional = usuarioRepositorio.findById(idUsuario);
	        if (usuarioOptional.isPresent()) {
	            Usuario usuario = usuarioOptional.get();
	            usuario.setFotoDePerfil(datosImagen);
	            usuarioRepositorio.save(usuario);
	        } else {
	            // Manejar el caso en que el usuario no se encuentre en la base de datos
	            System.out.println("Usuario no encontrado");
	        }
	    }
}