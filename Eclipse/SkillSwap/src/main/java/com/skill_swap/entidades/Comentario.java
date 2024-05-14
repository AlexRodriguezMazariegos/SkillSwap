package com.skill_swap.entidades;

import java.sql.Clob;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;

@Entity
public class Comentario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id_comentario;

	@ManyToOne
	@JoinColumn(name = "id_usuario")
	private Usuario id_usuario;

	@ManyToOne
	@JoinColumn(name = "id_articulo")
	private Articulo id_articulo;

	private Date fecha;

	@Lob
	private Clob texto;

	public Comentario(Long id_comentario, Usuario id_usuario, Articulo id_articulo, Date fecha, Clob texto) {
		super();
		this.id_comentario = id_comentario;
		this.id_usuario = id_usuario;
		this.id_articulo = id_articulo;
		this.fecha = fecha;
		this.texto = texto;
	}

	public Comentario() {
		super();

	}

	public Long getId_comentario() {
		return id_comentario;
	}

	public void setId_comentario(Long id_comentario) {
		this.id_comentario = id_comentario;
	}

	public Usuario getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Usuario id_usuario) {
		this.id_usuario = id_usuario;
	}

	public Articulo getId_articulo() {
		return id_articulo;
	}

	public void setId_articulo(Articulo id_articulo) {
		this.id_articulo = id_articulo;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public Clob getTexto() {
		return texto;
	}

	public void setTexto(Clob texto) {
		this.texto = texto;
	}

}
