package com.skill_swap.repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skill_swap.entidades.Seguimiento;

@Repository
public interface SeguimientoRepositorio extends CrudRepository<Seguimiento, Long>{

}
