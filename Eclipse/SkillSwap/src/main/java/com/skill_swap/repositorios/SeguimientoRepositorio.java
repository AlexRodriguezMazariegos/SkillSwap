package com.skill_swap.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.skill_swap.entidades.Seguimiento;
import com.skill_swap.entidades.SeguimientoId;

@Repository
public interface SeguimientoRepositorio extends JpaRepository<Seguimiento, SeguimientoId>{

}
