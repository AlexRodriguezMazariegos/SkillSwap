package com.skill_swap.entidades;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
@IdClass(SeguimientoId.class)
public class Seguimiento {

	@Id
	@ManyToOne
    @JoinColumn(name = "id_usuario_seguidor")
    private Usuario id_seguidor;
	
	@Id	
	@ManyToOne
    @JoinColumn(name = "id_usuario_seguido")
    private Usuario id_seguido;

	public Seguimiento() {
		super();
	}
	
	public Seguimiento(Usuario id_seguidor, Usuario id_seguido) {
		super();
		this.id_seguidor = id_seguidor;
		this.id_seguido = id_seguido;
	}

	public Usuario getId_seguidor() {
		return id_seguidor;
	}

	public void setId_seguidor(Usuario id_seguidor) {
		this.id_seguidor = id_seguidor;
	}

	public Usuario getId_seguido() {
		return id_seguido;
	}

	public void setId_seguido(Usuario id_seguido) {
		this.id_seguido = id_seguido;
	}
	
	
	
}
