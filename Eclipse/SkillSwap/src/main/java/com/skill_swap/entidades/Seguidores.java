package com.skill_swap.entidades;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Seguidores {

	@Id
	@ManyToOne
	@JoinColumn(name = "id_usuario_seguidor")
	private Usuario id_usuario_seguidor;

	@Id
	@ManyToOne
	@JoinColumn(name = "id_usuario_seguido")
	private Usuario id_usuario_seguido;

	public Seguidores() {
		super();
	}

	public Seguidores(Usuario id_usuario_seguidor, Usuario id_usuario_seguido) {
		super();
		this.id_usuario_seguidor = id_usuario_seguidor;
		this.id_usuario_seguido = id_usuario_seguido;
	}

	public Usuario getId_usuario_seguidor() {
		return id_usuario_seguidor;
	}

	public void setId_usuario_seguidor(Usuario id_usuario_seguidor) {
		this.id_usuario_seguidor = id_usuario_seguidor;
	}

	public Usuario getId_usuario_seguido() {
		return id_usuario_seguido;
	}

	public void setId_usuario_seguido(Usuario id_usuario_seguido) {
		this.id_usuario_seguido = id_usuario_seguido;
	}

}