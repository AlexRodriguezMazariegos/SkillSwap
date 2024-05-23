package com.skill_swap.repositorios;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.skill_swap.entidades.Rol;

public interface RolRepositorio extends JpaRepository<Rol, Long> {
    
	@Query("Select r from Rol r where r.nombre = ?1")
    Optional<Rol> findByNombre(String nombre); 

}
