package com.skill_swap.entidades;

import java.io.Serializable;


public class SeguimientoId implements Serializable{
	
	public SeguimientoId(Long id_seguidor, Long id_seguido) {
		super();
		this.id_seguidor = id_seguidor;
		this.id_seguido = id_seguido;
	}
	
	public SeguimientoId() {

	}

	private Long id_seguidor;
	
	private Long id_seguido;

	public Long getId_seguidor() {
		return id_seguidor;
	}

	public void setId_seguidor(Long id_seguidor) {
		this.id_seguidor = id_seguidor;
	}

	public Long getId_seguido() {
		return id_seguido;
	}

	public void setId_seguido(Long id_seguido) {
		this.id_seguido = id_seguido;
	}

}
