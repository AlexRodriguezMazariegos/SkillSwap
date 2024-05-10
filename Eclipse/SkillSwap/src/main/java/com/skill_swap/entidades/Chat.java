package com.skill_swap.entidades;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Chat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id_chat;

	@ManyToOne
	@JoinColumn(name = "id_usuario1")
	private Usuario usuario1;

	@ManyToOne
	@JoinColumn(name = "id_usuario2")
	private Usuario usuario2;

	public Chat(Long id_chat, Usuario usuario1, Usuario usuario2) {
		super();
		this.id_chat = id_chat;
		this.usuario1 = usuario1;
		this.usuario2 = usuario2;
	}

	public Chat() {
		super();
	}

	public Long getId_chat() {
		return id_chat;
	}

	public void setId_chat(Long id_chat) {
		this.id_chat = id_chat;
	}

	public Usuario getUsuario1() {
		return usuario1;
	}

	public void setUsuario1(Usuario usuario1) {
		this.usuario1 = usuario1;
	}

	public Usuario getUsuario2() {
		return usuario2;
	}

	public void setUsuario2(Usuario usuario2) {
		this.usuario2 = usuario2;
	}

}
