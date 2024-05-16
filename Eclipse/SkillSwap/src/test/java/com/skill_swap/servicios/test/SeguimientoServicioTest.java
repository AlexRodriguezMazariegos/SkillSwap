package com.skill_swap.servicios.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.skill_swap.entidades.Seguimiento;
import com.skill_swap.entidades.SeguimientoId;
import com.skill_swap.repositorios.SeguimientoRepositorio;
import com.skill_swap.servicios.SeguimientoServicio;

public class SeguimientoServicioTest {

	@Mock
	SeguimientoRepositorio seguimientoRepo;

	@InjectMocks
	private SeguimientoServicio seguimientoServicio;

	private ArrayList<Seguimiento> seguimientos;

	private Seguimiento seguimiento;

	private SeguimientoId id;

	@BeforeEach
	void init() {
		MockitoAnnotations.openMocks(this);

		seguimientos = new ArrayList<>();
		seguimiento = new Seguimiento();
		id = new SeguimientoId(); // Puedes inicializar el id según tus necesidades
		seguimientos.add(seguimiento);

		when(seguimientoRepo.findAll()).thenReturn(seguimientos);
	}

	@Test
	void getSeguimientos() {
		ArrayList<Seguimiento> seguimientos = seguimientoServicio.getSeguimientos();

		assertEquals(this.seguimientos, seguimientos);
	}

	@Test
	void saveSeguimiento() {
		when(seguimientoRepo.save(seguimiento)).thenReturn(seguimiento);

		Seguimiento savedSeguimiento = seguimientoServicio.saveSeguimiento(seguimiento);

		verify(seguimientoRepo).save(seguimiento);

		assertEquals(seguimiento, savedSeguimiento);
	}

	@Test
	void getById() {
		when(seguimientoRepo.findById(id)).thenReturn(Optional.of(seguimiento));

		Optional<Seguimiento> foundSeguimiento = seguimientoServicio.getById(id);

		verify(seguimientoRepo).findById(id);

		assertTrue(foundSeguimiento.isPresent());
		assertEquals(seguimiento, foundSeguimiento.get());
	}

	@Test
	void updateByIdPut() {
		when(seguimientoRepo.findById(id)).thenReturn(Optional.of(seguimiento));
		when(seguimientoRepo.save(seguimiento)).thenReturn(seguimiento);

		Seguimiento updatedSeguimiento = seguimientoServicio.updateByIdPut(seguimiento, id);

		verify(seguimientoRepo).findById(id);
		verify(seguimientoRepo).save(seguimiento);

		assertEquals(seguimiento, updatedSeguimiento);
	}

	@Test
	void deleteSeguimiento() {
		boolean isDeleted = seguimientoServicio.borrarSeguimiento(id);

		verify(seguimientoRepo).deleteById(id);

		assertTrue(isDeleted);
	}
}
