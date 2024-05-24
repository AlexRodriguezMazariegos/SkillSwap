package com.skill_swap.entidades;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@IdClass(ArticuloSkillId.class)
public class Articulo_Skill {
	@Id
    @ManyToOne
    @JoinColumn(name = "articulo")
    private Articulo articulo;

    @Id
    @ManyToOne
    @JoinColumn(name = "skill")
    private Skill skill;
    
	public Articulo_Skill() {
		super();
	}

	public Articulo_Skill(Articulo articulo, Skill skill) {
		super();
		this.articulo = articulo;
		this.skill = skill;
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
