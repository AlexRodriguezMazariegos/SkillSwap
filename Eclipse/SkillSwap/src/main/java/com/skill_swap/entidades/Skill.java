package com.skill_swap.entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Skill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id_skill;

	@Column(length = 15)
	private String nombre;

	public Skill() {
		super();
	}

	public Skill(int id_skill, String nombre) {
		super();
		this.id_skill = id_skill;
		this.nombre = nombre;
	}

	public int getId_skill() {
		return id_skill;
	}

	public void setId_skill(int id_skill) {
		this.id_skill = id_skill;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

}
