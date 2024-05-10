package com.skill_swap.servicios;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skill_swap.entidades.Seguimiento;
import com.skill_swap.repositorios.SeguimientoRepositorio;

@Service
public class SeguimientoServicio {

	@Autowired
	SeguimientoRepositorio seguimientoRepositorio;
	
	public ArrayList<Seguimiento> getSeguimientos()
	{
		return (ArrayList<Seguimiento>) seguimientoRepositorio.findAll();
	}
	
	public Seguimiento saveSeguimiento(Seguimiento seguimiento)
	{
		return seguimientoRepositorio.save(seguimiento);
	}
	
	public Optional<Seguimiento> getById(Long id){
		return seguimientoRepositorio.findById(id);
	}
	
	public Seguimiento updateByIdPut(Seguimiento request, Long id) 
	{
		Seguimiento seguimiento = seguimientoRepositorio.findById(id).get();
		seguimiento.setId_seguidor(request.getId_seguidor());
		seguimiento.setId_seguido(request.getId_seguido());
		seguimientoRepositorio.save(seguimiento);
		return seguimiento;
	}
	
	
	public Boolean deleteSeguimiento (Long id) 
	{
		try
		{
			seguimientoRepositorio.deleteById(id);
			return true;
		}
		catch(Exception e)
		{
			return false;
		}
	}
}
