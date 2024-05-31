package com.skill_swap.repositorios;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skill_swap.entidades.Rol;

public interface RolRepositorio extends JpaRepository<Rol, Long>{

	Optional<Rol> findByName(String nombre);
}
