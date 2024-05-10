package com.skill_swap.entidades;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Mensaje {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id_mensaje;

	@ManyToOne
	@JoinColumn(name = "id_usuario")
	private Usuario usuario;

	@ManyToOne
	@JoinColumn(name = "id_chat")
	private Chat chat;

	private String mensaje;

	private LocalDate fecha;

	public Mensaje(Long id_mensaje, Usuario usuario, Chat chat, String mensaje, LocalDate fecha) {
		super();
		this.id_mensaje = id_mensaje;
		this.usuario = usuario;
		this.chat = chat;
		this.mensaje = mensaje;
		this.fecha = fecha;
	}

	public Mensaje() {
		super();
	}

	public Long getId_mensaje() {
		return id_mensaje;
	}

	public void setId_mensaje(Long id_mensaje) {
		this.id_mensaje = id_mensaje;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Chat getChat() {
		return chat;
	}

	public void setChat(Chat chat) {
		this.chat = chat;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}

	public LocalDate getFecha() {
		return fecha;
	}

	public void setFecha(LocalDate fecha) {
		this.fecha = fecha;
	}
}