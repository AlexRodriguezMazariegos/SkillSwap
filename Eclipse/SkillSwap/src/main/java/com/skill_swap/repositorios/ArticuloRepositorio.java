package com.skill_swap.repositorios;

import com.skill_swap.entidades.Articulo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticuloRepositorio extends JpaRepository<Articulo, Long> {

	List<Articulo> findByUsuarioId(Long idUsuario);
	List<Articulo> findByActivo(Boolean activo);
	
	@Query("Select a from Articulo a where a.id = ?1 and a.activo = true")
    Optional<Articulo> findByIdAndActivo(Long id);

}
