package atos.eviden.entidades;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Habilidad {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id_habilidad;
	
	private String nombre;
	
	@ManyToMany(mappedBy = "habilidades")
	@JsonIgnore
	private List<Usuario> usuarios;

	
	public Habilidad() {
		super();
	}


	public Habilidad(Long id_habilidad, String nombre, List<Usuario> usuarios) {
		super();
		this.id_habilidad = id_habilidad;
		this.nombre = nombre;
		this.usuarios = usuarios;
	}


	public Long getId_habilidad() {
		return id_habilidad;
	}


	public void setId_habilidad(Long id_habilidad) {
		this.id_habilidad = id_habilidad;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public List<Usuario> getUsuarios() {
		return usuarios;
	}


	public void setUsuarios(List<Usuario> usuarios) {
		this.usuarios = usuarios;
	}

	
	
	
}
