package com.skill_swap.entidades;

import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Articulo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;

	@ManyToOne
	@JoinColumn(name = "usuario")
	private Usuario usuario;

	@Column(columnDefinition = "Text")
	private String contenido;

	@Column(columnDefinition = "Text")
	private String descripcion;

	private String titulo;

	private Date fechaPublicacion;

	public Articulo() {
		super();
	}

	public Articulo(Long id, Usuario usuario, String contenido, String descripcion, String titulo,
			Date fechaPublicacion) {
		super();
		this.id = id;
		this.usuario = usuario;
		this.contenido = contenido;
		this.descripcion = descripcion;
		this.titulo = titulo;
		this.fechaPublicacion = fechaPublicacion;

	}

	public Usuario getUsuario() {
		return usuario;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getTitulo() {
		return titulo;
	}

	public Date getFechaPublicacion() {
		return fechaPublicacion;
	}

	public void setFechaPublicacion(Date fechaPublicacion) {
		this.fechaPublicacion = fechaPublicacion;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Long getId() {
	    return id;
	}

	public void setId(Long id) {
	    this.id = id;
	}

	public String getContenido() {
		return contenido;
	}

	public void setContenido(String contenido) {
		this.contenido = contenido;
	}

}