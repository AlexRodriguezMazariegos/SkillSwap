package com.skill_swap.entidades;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.validation.constraints.Size;

@Entity
public class Skill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id_skill;

	@Size(max = 40)
	private String nombre;

	@ManyToMany(mappedBy = "skills")
	@JsonIgnore
	private List<Usuario> usuarios;

	public Skill() {
		super();
	}

	public Skill(Long id_skill, String nombre, List<Usuario> usuarios) {
		super();
		this.id_skill = id_skill;
		this.nombre = nombre;
		this.usuarios = usuarios;
	}

	public Long getId_habilidad() {
		return id_skill;
	}

	public void setId_habilidad(Long id_habilidad) {
		this.id_skill = id_habilidad;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public List<Usuario> getUsuarios() {
		return usuarios;
	}

	public void setUsuarios(List<Usuario> usuarios) {
		this.usuarios = usuarios;
	}

}
