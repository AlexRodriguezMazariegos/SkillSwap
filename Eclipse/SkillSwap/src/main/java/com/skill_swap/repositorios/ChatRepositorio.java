package com.skill_swap.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.skill_swap.entidades.Chat;

@Repository
public interface ChatRepositorio extends JpaRepository<Chat, Long> {

    @Query("SELECT c FROM Chat c WHERE (c.usuario1.id = :usuarioId1 AND c.usuario2.id = :usuarioId2) OR (c.usuario1.id = :usuarioId2 AND c.usuario2.id = :usuarioId1)")
    Chat findByUsuarioId1AndUsuarioId2(@Param("usuarioId1") Long usuarioId1, @Param("usuarioId2") Long usuarioId2);
}
