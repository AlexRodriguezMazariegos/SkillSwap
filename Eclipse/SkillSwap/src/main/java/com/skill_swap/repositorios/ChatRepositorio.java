package com.skill_swap.repositorios;

import com.skill_swap.entidades.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ChatRepositorio extends JpaRepository<Chat, Long> {

    @Query("SELECT c FROM Chat c WHERE (c.usuario1.id = :usuario1Id AND c.usuario2.id = :usuario2Id) OR (c.usuario1.id = :usuario2Id AND c.usuario2.id = :usuario1Id)")
    Chat findByUsuarios(@Param("usuario1Id") Long usuario1Id, @Param("usuario2Id") Long usuario2Id);
}
