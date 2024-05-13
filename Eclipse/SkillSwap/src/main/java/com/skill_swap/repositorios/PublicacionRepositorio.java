package com.skill_swap.repositorios;

import com.skill_swap.entidades.Publicacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PublicacionRepositorio extends JpaRepository<Publicacion, Long> {
}
