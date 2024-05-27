package com.skill_swap.entidades;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Articulo_Skill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	
	@ManyToOne
	@JoinColumn(name = "articulo")
	private Articulo articulo;
	
	@ManyToOne
	@JoinColumn(name = "skill")
	private Skill skill;

	public Articulo_Skill(Long id, Articulo articulo, Skill skill) {
		super();
		this.id = id;
		this.articulo = articulo;
		this.skill = skill;
	}
	
	public Articulo_Skill() {
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Articulo getArticulo() {
		return articulo;
	}

	public void setArticulo(Articulo articulo) {
		this.articulo = articulo;
	}

	public Skill getSkill() {
		return skill;
	}

	public void setSkill(Skill skill) {
		this.skill = skill;
	}

}
