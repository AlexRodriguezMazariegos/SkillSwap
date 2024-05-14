package com.skill_swap.entidades;

import java.sql.Clob;
import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class Articulo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id_articulo;

	@ManyToOne
	@JoinColumn(name = "id_usuario")
	private Usuario usuario;

	@Lob
	private Clob contenido;

	private Clob descripcion;

	private String titulo;
	
	private Date fechaPublicacion;

	public Articulo() {
		super();
	}

	public Articulo(Long id_articulo, Usuario usuario, Clob contenido, Clob descripcion, String titulo, Date fechaPublicacion) {
		super();
		this.id_articulo = id_articulo;
		this.usuario = usuario;
		this.contenido = contenido;
		this.descripcion = descripcion;
		this.titulo = titulo;
		this.fechaPublicacion = fechaPublicacion;
		
	}

	public Long getId() {
		return id_articulo;
	}

	public void setId(Long id_articulo) {
		this.id_articulo = id_articulo;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public Clob getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(Clob descripcion) {
		this.descripcion = descripcion;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Long getId_articulo() {
		return id_articulo;
	}

	public void setId_articulo(Long id_articulo) {
		this.id_articulo = id_articulo;
	}

	public Clob getContenido() {
		return contenido;
	}

	public void setContenido(Clob contenido) {
		this.contenido = contenido;
	}

}