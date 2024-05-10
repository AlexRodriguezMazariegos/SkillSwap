package com.skill_swap.servicios;

import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.skill_swap.entidades.Skill;
import com.skill_swap.repositorios.SkillRepositorio;

@Service
public class SkillServicio {

	@Autowired
	SkillRepositorio skillRepositorio;

	public ArrayList<Skill> getSkills() {
		return (ArrayList<Skill>) skillRepositorio.findAll();
	}

	public Skill saveSkill(Skill habilidad) {
		return skillRepositorio.save(habilidad);
	}

	public Optional<Skill> getById(Long id) {
		return skillRepositorio.findById(id);
	}

	public Skill updateByIdPut(Skill request, Long id) {
		Skill habilidad = skillRepositorio.findById(id).get();
		habilidad.setUsuarios(request.getUsuarios());
		habilidad.setNombre(request.getNombre());
		skillRepositorio.save(habilidad);
		return habilidad;
	}

	public Boolean deleteSkill(Long id) {
		try {
			skillRepositorio.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
