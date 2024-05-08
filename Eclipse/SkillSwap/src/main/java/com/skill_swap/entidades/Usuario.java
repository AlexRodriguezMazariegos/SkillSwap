package com.skill_swap.entidades;


import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id_usuario;

	private String nombre;

	private String apellido;

	private String email;
	
	private String contrasena;
	
	private String urlGitHub;
	
	private String puestoEmpresa;
	
	@ManyToMany
	@JoinTable
    private List<Habilidad> habilidades;

	
	
	public Usuario() {
		super();
	}
	
	public Usuario(Long id_usuario, String nombre, String apellido, String email, String contrasena, String urlGitHub,
			String puestoEmpresa, List<Habilidad> habilidades) {
		super();
		this.id_usuario = id_usuario;
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.contrasena = contrasena;
		this.urlGitHub = urlGitHub;
		this.puestoEmpresa = puestoEmpresa;
		this.habilidades = habilidades;
	}

	public Long getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(Long id_usuario) {
		this.id_usuario = id_usuario;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContrasena() {
		return contrasena;
	}

	public void setContrasena(String contrasena) {
		this.contrasena = contrasena;
	}

	public String getUrlGitHub() {
		return urlGitHub;
	}

	public void setUrlGitHub(String urlGitHub) {
		this.urlGitHub = urlGitHub;
	}

	public String getPuestoEmpresa() {
		return puestoEmpresa;
	}

	public void setPuestoEmpresa(String puestoEmpresa) {
		this.puestoEmpresa = puestoEmpresa;
	}

	public List<Habilidad> getHabilidades() {
		return habilidades;
	}

	public void setHabilidades(List<Habilidad> habilidades) {
		this.habilidades = habilidades;
	}

	
	


	
}
