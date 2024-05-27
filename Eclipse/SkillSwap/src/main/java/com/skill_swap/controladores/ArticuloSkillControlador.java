package com.skill_swap.controladores;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skill_swap.entidades.Articulo_Skill;
import com.skill_swap.repositorios.ArticuloRepositorio;
import com.skill_swap.repositorios.SkillRepositorio;
import com.skill_swap.servicios.ArticuloSkillServicio;

@RestController
@RequestMapping("/api/v1/articuloskill")
@CrossOrigin(origins = "http://localhost:4200")
public class ArticuloSkillControlador {

	@Autowired
	private ArticuloSkillServicio articuloSkillServicio;
	
	@Autowired
	private ArticuloRepositorio articuloRepositorio;
	
	@Autowired
	private SkillRepositorio skillRepositorio;

	@GetMapping("")
	public ResponseEntity<List<Articulo_Skill>> obtenerTodo() {
		return ResponseEntity.status(HttpStatus.OK).body(articuloSkillServicio.listarTodos());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Articulo_Skill>> obtenerPorId(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.OK).body(articuloSkillServicio.listarPorId(id));
	}
	@GetMapping("/articulo/{id}")
	public ResponseEntity<Optional<List<Articulo_Skill>>> obtenerPorElArticulo(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.OK).body(articuloSkillServicio.listarPorArticulo(articuloRepositorio.findById(id).get()));
	}
	@GetMapping("/skill/{id}")
	public ResponseEntity<Optional<List<Articulo_Skill>>> obtenerPorLaSkill(@PathVariable Long id) {
		return ResponseEntity.status(HttpStatus.OK).body(articuloSkillServicio.listarPorSkill(skillRepositorio.findById(id).get()));
	}
}
