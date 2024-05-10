package com.skill_swap.entidades;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
    @JoinColumn(name = "id_publicacion")
    private Publicacion id_publicacion;

	
	private Date fecha;
	
	private String texto;

	public Comentario(Long id_comentario, Usuario id_usuario, Publicacion id_publicacion, Date fecha, String texto) {
		super();
		this.id_comentario = id_comentario;
		this.id_usuario = id_usuario;
		this.id_publicacion = id_publicacion;
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

	public Publicacion getId_publicacion() {
		return id_publicacion;
	}

	public void setId_publicacion(Publicacion id_publicacion) {
		this.id_publicacion = id_publicacion;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}

	public String getTexto() {
		return texto;
	}

	public void setTexto(String texto) {
		this.texto = texto;
	}
	
	
}
