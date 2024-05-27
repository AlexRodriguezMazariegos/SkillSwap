package com.skill_swap.repositorios;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skill_swap.entidades.Articulo;
import com.skill_swap.entidades.Articulo_Skill;
import com.skill_swap.entidades.Skill;

import java.util.List;


@Repository
public interface Articulo_SkillRepositorio extends JpaRepository<Articulo_Skill, Long> {
	List<Articulo_Skill> findAll();
	Optional<Articulo_Skill> findById(Long id);
	Optional<List<Articulo_Skill>> findByArticulo(Articulo articulo);
	Optional<List<Articulo_Skill>> findBySkill(Skill skill);
}
