package com.skill_swap.servicios;

import java.util.ArrayList;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skill_swap.entidades.Seguimiento;
import com.skill_swap.entidades.SeguimientoId;
import com.skill_swap.repositorios.SeguimientoRepositorio;

@Service
public class SeguimientoServicio {

	@Autowired
	SeguimientoRepositorio seguimientoRepositorio;

	public ArrayList<Seguimiento> getSeguimientos() {
		return (ArrayList<Seguimiento>) seguimientoRepositorio.findAll();
	}

	public Seguimiento saveSeguimiento(Seguimiento seguimiento) {
		return seguimientoRepositorio.save(seguimiento);
	}

	public Optional<Seguimiento> getById(SeguimientoId id) {
		return seguimientoRepositorio.findById(id);
	}

	public Seguimiento updateByIdPut(Seguimiento request, SeguimientoId id) {
	    try {
		Seguimiento seguimiento = seguimientoRepositorio.findById(id).get();
		seguimiento.setSeguidor(request.getSeguidor());
		seguimiento.setSeguido(request.getSeguido());
		seguimientoRepositorio.save(seguimiento);
		return seguimiento;
	    } 
	    catch (NoSuchElementException e) 
	    {
        // Manejo de la excepción si el usuario no existe
        return null;
	    }
	}

	public Boolean borrarSeguimiento(SeguimientoId id) {
		try {
			seguimientoRepositorio.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
}
