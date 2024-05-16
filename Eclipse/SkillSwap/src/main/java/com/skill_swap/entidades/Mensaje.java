package com.skill_swap.entidades;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Size;

@Entity
public class Mensaje {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	
	@ManyToOne
    @JoinColumn(name = "usuario")
    private Usuario usuario;
	
	@ManyToOne
    @JoinColumn(name = "chat")
    private Chat chat;
	
	@Size(max = 200)
	private String texto;
	
	private Date fecha;

	public Mensaje(Long id, Usuario usuario, Chat chat, String texto, Date fecha) {
		super();
		this.id = id;
		this.usuario = usuario;
		this.chat = chat;
		this.texto = texto;
		this.fecha = fecha;
	}
	
	public Mensaje() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	
	
}
