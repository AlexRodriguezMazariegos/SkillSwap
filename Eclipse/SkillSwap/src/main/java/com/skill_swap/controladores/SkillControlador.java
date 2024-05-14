package com.skill_swap.controladores;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skill_swap.entidades.Skill;
import com.skill_swap.servicios.SkillServicio;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Configuración CORS a nivel de clase
@RequestMapping("api/v1/skill")
public class SkillControlador {

	@Autowired
	private SkillServicio skillServicio;

	@GetMapping
	public ArrayList<Skill> getSkills() {
		return this.skillServicio.getSkills();
	}

	@PostMapping
	public Skill saveSkill(@RequestBody Skill skill) {
		return this.skillServicio.saveSkill(skill);
	}

	@GetMapping(path = "/{id}")
	public Optional<Skill> getSkillById(@PathVariable("id") Long id) {
		return this.skillServicio.getById(id);
	}

	@PutMapping(path = "/{id}")
	public Skill updateByIdPut(@RequestBody Skill request, @PathVariable Long id) {
		return this.skillServicio.updateByIdPut(request, id);
	}

	@DeleteMapping(path = "/{id}")
	public ResponseEntity<?> deleteById(@PathVariable("id") Long id) {
		skillServicio.deleteSkill(id);
		return ResponseEntity.ok().build();
	}

}
