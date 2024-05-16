package com.skill_swap.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.skill_swap.entidades.Skill;

@Repository
public interface SkillRepositorio extends JpaRepository<Skill, Long>{

}
