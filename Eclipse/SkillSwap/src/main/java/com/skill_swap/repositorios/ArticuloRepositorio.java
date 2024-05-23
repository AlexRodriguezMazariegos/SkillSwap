package com.skill_swap.repositorios;

import com.skill_swap.entidades.Articulo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticuloRepositorio extends JpaRepository<Articulo, Long> {

	List<Articulo> findByUsuarioId(Long idUsuario);

}
