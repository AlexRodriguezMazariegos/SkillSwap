package com.skill_swap.servicios;

import java.util.List;
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
    	if(usuarioRepositorio.findById(id).isPresent()) {
    		Usuario usuarioAModificar= usuarioRepositorio.findById(id).get();
    		//El id se queda como estaba
    		usuarioAModificar.setId(id);
    		usuarioAModificar.setNombre(usuario.getNombre());
    		usuarioAModificar.setApellido(usuario.getApellido());
    		usuarioAModificar.setEmail(usuario.getEmail());
    		usuarioAModificar.setFotoDePerfil(usuario.getFotoDePerfil());
    		usuarioAModificar.setContrasena(usuario.getContrasena());
    		usuarioAModificar.setUrlGitHub(usuario.getUrlGitHub());
    		usuarioAModificar.setSkills(usuario.getSkills());
            return usuarioRepositorio.save(usuarioAModificar);
    	}else {
    		return null;
    	}
    }
    
    // Método para borrar un usuario por su ID
    public void borrarUsuario(Long id) {
        usuarioRepositorio.deleteById(id);
    }
}
