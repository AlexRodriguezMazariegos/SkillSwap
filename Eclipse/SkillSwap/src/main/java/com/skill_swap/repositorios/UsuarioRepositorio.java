package com.skill_swap.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skill_swap.entidades.Usuario;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long>{

	@Query("Select u from Usuario u where u.email = ?1")
	Usuario findByEmail(String email);
	
}
