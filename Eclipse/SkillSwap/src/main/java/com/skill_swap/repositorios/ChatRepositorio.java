package com.skill_swap.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skill_swap.entidades.Chat;

@Repository
public interface ChatRepositorio extends JpaRepository<Chat, Long> {

}
