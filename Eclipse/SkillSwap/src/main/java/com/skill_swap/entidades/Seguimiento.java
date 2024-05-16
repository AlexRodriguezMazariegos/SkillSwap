package com.skill_swap.entidades;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@IdClass(SeguimientoId.class)
public class Seguimiento {

	@Id
	@ManyToOne
	@JoinColumn(name = "id_usuario_seguidor")
	private Usuario seguidor;

	@Id
	@ManyToOne
	@JoinColumn(name = "id_usuario_seguido")
	private Usuario seguido;

	public Seguimiento() {
		super();
	}

	public Seguimiento(Usuario seguidor, Usuario seguido) {
		super();
		this.seguidor = seguidor;
		this.seguido = seguido;
	}

	public Usuario getSeguidor() {
		return seguidor;
	}

	public void setSeguidor(Usuario seguidor) {
		this.seguidor = seguidor;
	}

	public Usuario getSeguido() {
		return seguido;
	}

	public void setSeguido(Usuario seguido) {
		this.seguido = seguido;
	}

}
