package com.skill_swap.servicios.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.skill_swap.entidades.Skill;
import com.skill_swap.repositorios.SkillRepositorio;
import com.skill_swap.servicios.SkillServicio;

public class SkillServicioTest {

	@Mock
	SkillRepositorio skillRepo;

	@InjectMocks
	private SkillServicio skillServicio;

	private List<Skill> skills;

	private Skill skill;

	public Long id = 1L;

	@BeforeEach
	void init() {
		MockitoAnnotations.openMocks(this);

		skills = new ArrayList<>();
		skill = new Skill();
		skills.add(skill);

		when(skillRepo.findAll()).thenReturn(skills);
	}

	@Test
	void getSkills() {
		List<Skill> skills = skillServicio.obtenerTodosLosSkills();

		assertEquals(this.skills, skills);
	}

	@Test
	void saveSkill() {
		when(skillRepo.save(skill)).thenReturn(skill);

		Skill savedSkill = skillServicio.crearSkill(skill);

		verify(skillRepo).save(skill);

		assertEquals(skill, savedSkill);
	}

	@Test
	void getById() {
		when(skillRepo.findById(id)).thenReturn(Optional.of(skill));

		Optional<Skill> foundSkill = skillServicio.obtenerSkillPorId(id);

		verify(skillRepo).findById(id);

		assertTrue(foundSkill.isPresent());
		assertEquals(skill, foundSkill.get());
	}

	@Test
	void updateById() {
		when(skillRepo.findById(id)).thenReturn(Optional.of(skill));
		when(skillRepo.save(skill)).thenReturn(skill);

		Skill updatedSkill = skillServicio.actualizarSkill(id, skill);

		verify(skillRepo).findById(id);
		verify(skillRepo).save(skill);

		assertEquals(skill, updatedSkill);
	}

	@Test
	void deleteSkill() {
		boolean isDeleted = skillServicio.borrarSkill(id);

		verify(skillRepo).deleteById(id);

		assertTrue(isDeleted);
	}
}

