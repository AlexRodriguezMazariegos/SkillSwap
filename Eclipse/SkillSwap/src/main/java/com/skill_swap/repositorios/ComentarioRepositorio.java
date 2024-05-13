package com.skill_swap.repositorios;

import com.skill_swap.entidades.Comentario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComentarioRepositorio extends JpaRepository<Comentario, Long> {
}
