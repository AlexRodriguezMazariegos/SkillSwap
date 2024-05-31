package com.skill_swap.controladores;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
@RequestMapping("api/v1/skill")
@CrossOrigin(origins = "http://localhost:4200")
public class SkillControlador {

	@Autowired
	private SkillServicio skillServicio;

	@GetMapping
	public List<Skill> obtenerTodosLosSkills() {
		return skillServicio.obtenerTodosLosSkills();
	}

	// Endpoint para obtener un skill por su ID
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Skill>> obtenerSkillPorId(@PathVariable Long id) {
		if (skillServicio.obtenerSkillPorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(skillServicio.obtenerSkillPorId(id));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

		}
	}

	// Endpoint para crear un nuevo skill
	@PostMapping("")
	public ResponseEntity<Skill> crearSkill(@RequestBody Skill skill) {
		return ResponseEntity.status(HttpStatus.CREATED).body(skillServicio.crearSkill(skill));
	}

	// Endpoint para actualizar un skill existente
	@PutMapping("/{id}")
	public ResponseEntity<Skill> actualizarSkill(@PathVariable Long id, @RequestBody Skill skill) {
		if (skillServicio.obtenerSkillPorId(id).isPresent()) {
			return ResponseEntity.status(HttpStatus.OK).body(skillServicio.actualizarSkill(id, skill));
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}

	// Endpoint para borrar un skill por su ID
	@DeleteMapping("/{id}")
	public ResponseEntity<Skill> borrarSkill(@PathVariable Long id) {
		if (skillServicio.obtenerSkillPorId(id).isPresent()) {
			skillServicio.borrarSkill(id);
			return ResponseEntity.status(HttpStatus.OK).build();
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
}
