package com.skill_swap.entidades;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Publicacion {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id_publicacion;
	
	@ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;
	
	private String contenido;
	
	
	public Publicacion() {
		super();
	}

	public Publicacion(Long id_publicacion, Usuario usuario, String contenido) {
		super();
		this.id_publicacion = id_publicacion;
		this.usuario = usuario;
		this.contenido = contenido;
	}

	public Long getId() {
		return id_publicacion;
	}

	public void setId(Long id_publicacion) {
		this.id_publicacion = id_publicacion;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getContenido() {
		return contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}
	
	
}
