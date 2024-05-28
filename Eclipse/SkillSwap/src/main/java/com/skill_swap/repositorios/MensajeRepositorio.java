package com.skill_swap.repositorios;

import com.skill_swap.entidades.Mensaje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MensajeRepositorio extends JpaRepository<Mensaje, Long> {
    List<Mensaje> findByChatId(Long chatId);
    List<Mensaje> findByChatIdAndUsuarioId(Long chatId, Long userId);
}
