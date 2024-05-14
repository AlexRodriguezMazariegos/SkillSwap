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

	public Skill saveSkill(Skill skill) {
		return skillRepositorio.save(skill);
	}

	public Optional<Skill> getById(Long id) {
		return skillRepositorio.findById(id);
	}

	public Skill updateByIdPut(Skill request, Long id) {
		Skill skill = skillRepositorio.findById(id).get();
		skill.setUsuarios(request.getUsuarios());
		skill.setNombre(request.getNombre());
		skillRepositorio.save(skill);
		return skill;
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
