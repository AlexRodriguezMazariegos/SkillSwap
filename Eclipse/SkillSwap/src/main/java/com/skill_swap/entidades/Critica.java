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
public class Critica {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int id_critica;

	@ManyToOne
	@JoinColumn(name = "id_usuario")
	private Usuario id_usuario;

	@ManyToOne
	@JoinColumn(name = "id_post")
	private Post id_post;

	private LocalDate fecha;

	private int nota;

	@Lob
	private Clob comentario;

	public Critica() {
		super();
	}

	public Critica(int id_critica, Usuario id_usuario, Post id_post, LocalDate fecha, int nota, Clob comentario) {
		super();
		this.id_critica = id_critica;
		this.id_usuario = id_usuario;
		this.id_post = id_post;
		this.fecha = fecha;
		this.nota = nota;
		this.comentario = comentario;
	}

	public int getId_critica() {
		return id_critica;
	}

	public void setId_critica(int id_critica) {
		this.id_critica = id_critica;
	}

	public Usuario getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Usuario id_usuario) {
		this.id_usuario = id_usuario;
	}

	public Post getId_post() {
		return id_post;
	}

	public void setId_post(Post id_post) {
		this.id_post = id_post;
	}

	public LocalDate getFecha() {
		return fecha;
	}

	public void setFecha(LocalDate fecha) {
		this.fecha = fecha;
	}

	public int getNota() {
		return nota;
	}

	public void setNota(int nota) {
		this.nota = nota;
	}

	public Clob getComentario() {
		return comentario;
	}

	public void setComentario(Clob comentario) {
		this.comentario = comentario;
	}

}