package com.skill_swap.entidades;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.validation.constraints.Size;

@Entity
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id_usuario;

	@Size(max = 20)
	private String nombre;

	@Size(max = 40)
	private String apellido;

	@Size(max = 30)
	private String email;

	private byte[] fotoDePerfil;

	// Aqui no se pone nada de longitud xq se va a hashear
	private String contrasena;

	private String urlGitHub;

	@Size(max = 50)
	private String puestoEmpresa;

	@ManyToMany
	@JoinTable
	private List<Skill> skills;

	public Usuario() {
		super();
	}

	public Usuario(Long id_usuario, @Size(max = 20) String nombre, @Size(max = 40) String apellido,
			@Size(max = 30) String email, byte[] fotoDePerfil, String contrasena, String urlGitHub,
			@Size(max = 50) String puestoEmpresa, List<Skill> skills) {
		super();
		this.id_usuario = id_usuario;
		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.fotoDePerfil = fotoDePerfil;
		this.contrasena = contrasena;
		this.urlGitHub = urlGitHub;
		this.puestoEmpresa = puestoEmpresa;
		this.skills = skills;
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

	public byte[] getFotoDePerfil() {
		return fotoDePerfil;
	}

	public void setFotoDePerfil(byte[] fotoDePerfil) {
		this.fotoDePerfil = fotoDePerfil;
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

	public List<Skill> getSkills() {
		return skills;
	}

	public void setSkills(List<Skill> skills) {
		this.skills = skills;
	}

}
