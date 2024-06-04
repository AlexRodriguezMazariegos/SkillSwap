package com.skill_swap.entidades;

import java.io.Serializable;
import java.util.Objects;

public class ArticuloSkillId implements Serializable{

	private Articulo articulo;
	private Skill skill;
	
	 public ArticuloSkillId() {}

	    public ArticuloSkillId(Articulo articulo, Skill skill) {
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

		@Override
	    public boolean equals(Object o) {
	        if (this == o) return true;
	        if (o == null || getClass() != o.getClass()) return false;
	        ArticuloSkillId that = (ArticuloSkillId) o;
	        return Objects.equals(articulo, that.articulo) && Objects.equals(skill, that.skill);
	    }

	    @Override
	    public int hashCode() {
	        return Objects.hash(articulo, skill);
	    }
	}