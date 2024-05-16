package com.skill_swap.servicios;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.skill_swap.entidades.Skill;
import com.skill_swap.repositorios.SkillRepositorio;

@Service
public class SkillServicio {

	@Autowired
	SkillRepositorio skillRepositorio;

	// Método para obtener todos los skills
	public List<Skill> obtenerTodosLosSkills() {
		return skillRepositorio.findAll();
	}

	public Optional<Skill> obtenerSkillPorId(Long id) {
		return skillRepositorio.findById(id);
	}

	// Método para crear o actualizar un skill
	public Skill crearSkill(Skill skill) {
		return skillRepositorio.save(skill);
	}

	// Método para crear o actualizar un skill
	public Skill actualizarSkill(Long id, Skill skill) {
		if (skillRepositorio.findById(id).isPresent()) {
			Skill skillAModificar = skillRepositorio.findById(id).get();
			// El id se queda como estaba
			skillAModificar.setId(id);
			skillAModificar.setNombre(skill.getNombre());
			skillAModificar.setUsuarios(skill.getUsuarios());

			return skillRepositorio.save(skillAModificar);
		} else {
			return null;
		}
	}

	// Método para borrar un usuario por su ID
	public Boolean borrarSkill(Long id) {
		{
			try {
				skillRepositorio.deleteById(id);
				return true;
			} catch (Exception e) {
				return false;
			}
		}
	}
}