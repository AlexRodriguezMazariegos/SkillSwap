package com.skill_swap.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skill_swap.entidades.Articulo;

public interface ArticuloRepositorio extends JpaRepository<Articulo, Long> {
}
