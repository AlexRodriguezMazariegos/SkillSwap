package com.skill_swap.repositorios;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.skill_swap.entidades.Seguimiento;
import com.skill_swap.entidades.SeguimientoId;

@Repository
public interface SeguimientoRepositorio extends JpaRepository<Seguimiento, SeguimientoId>{

    @Query("SELECT s FROM Seguimiento s WHERE s.id_seguido.id = ?1")
    ArrayList<Seguimiento> findBySeguido(Long id);

    @Query("SELECT s FROM Seguimiento s WHERE s.id_seguidor.id = ?1")
    ArrayList<Seguimiento> findBySeguidor(Long id);
}
