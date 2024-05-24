package com.skill_swap.repositorios;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skill_swap.entidades.Articulo;
import com.skill_swap.entidades.Usuario;
import com.skill_swap.entidades.Valoracion;

public interface ValoracionRepositorio  extends JpaRepository<Valoracion, Long> {
	Optional<Valoracion> findById(Long id);
	Optional<List<Valoracion>> findByArticulo(Articulo articulo);
	Optional<List<Valoracion>> findByUsuario(Usuario usuario);

}
