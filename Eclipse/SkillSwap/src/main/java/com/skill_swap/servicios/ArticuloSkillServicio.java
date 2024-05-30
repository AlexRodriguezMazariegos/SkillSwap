package com.skill_swap.servicios;

import com.skill_swap.entidades.Articulo;
import com.skill_swap.entidades.Articulo_Skill;
import com.skill_swap.entidades.Skill;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skill_swap.repositorios.Articulo_SkillRepositorio;

@Service
public class ArticuloSkillServicio {

	@Autowired
	private Articulo_SkillRepositorio articulo_SkillRepositorio;
	
	public List<Articulo_Skill> listarTodos() {
		return articulo_SkillRepositorio.findAll();
	}
	
	public Optional<Articulo_Skill> listarPorId(Long id) {
		return articulo_SkillRepositorio.findById(id);
	}
	
	public Optional<List<Articulo_Skill>> listarPorArticulo(Articulo articulo){
		return articulo_SkillRepositorio.findByArticulo(articulo);
	}
	
	public Optional<List<Articulo_Skill>> listarPorSkill(Skill skill){
		return articulo_SkillRepositorio.findBySkill(skill);
	}
}
