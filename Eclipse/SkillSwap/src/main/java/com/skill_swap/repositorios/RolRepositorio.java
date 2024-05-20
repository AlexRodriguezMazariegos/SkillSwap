package com.skill_swap.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skill_swap.entidades.Rol;

@Repository
public interface RolRepositorio extends JpaRepository<Rol, Long>{

}
