package com.skill_swap.entidades;

import java.sql.Clob;
import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id_post;

	@ManyToOne
	@JoinColumn(name = "id_usuario")
	private Usuario usuario;

	private String titulo;

	private String descripcion;

	private LocalDate fecha;

	@Lob
	private Clob contenido;

	public Post() {
		super();
	}

	public Post(int id_post, Usuario usuario, String titulo, String descripcion, LocalDate fecha, Clob contenido) {
		super();
		this.id_post = id_post;
		this.usuario = usuario;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.fecha = fecha;
		this.contenido = contenido;
	}

	public int getId_post() {
		return id_post;
	}

	public void setId_post(int id_post) {
		this.id_post = id_post;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public LocalDate getFecha() {
		return fecha;
	}

	public void setFecha(LocalDate fecha) {
		this.fecha = fecha;
	}

	public Clob getContenido() {
		return contenido;
	}

	public void setContenido(Clob contenido) {
		this.contenido = contenido;
	}

}