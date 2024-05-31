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

import com.skill_swap.entidades.Usuario;
import com.skill_swap.repositorios.UsuarioRepositorio;
import com.skill_swap.servicios.UsuarioServicio;

public class UsuarioServicioTest {

	@Mock
	UsuarioRepositorio usuarioRepo;

	@InjectMocks
	private UsuarioServicio usuarioServicio;

	private List<Usuario> usuarios;

	private Usuario usuario;

	public Long id = 1L;

	@BeforeEach
	void init() {
		MockitoAnnotations.openMocks(this);

		// Inicializamos la lista de partners
		usuarios = new ArrayList<>();
		usuario = new Usuario();
		/*
		 * usuario.setId_usuario(id); usuario.setNombre("nombre");
		 * usuario.setApellido("apellido"); usuario.setContrasena("contraseña123");
		 * usuario.setEmail("moha123@gmail.com"); usuario.setPuestoEmpresa("puesto");
		 */
		usuarios.add(usuario);

		// Configuramos el comportamiento simulado del repositorio
		when(usuarioRepo.findAll()).thenReturn(usuarios);
	}

	@Test
	void getUsuarios() {
		// Llamamos al método del servicio que queremos probar
		List<Usuario> Usuarios = usuarioServicio.obtenerTodosLosUsuarios();

		// Verificamos que el método del repositorio fue invocado correctamente
		// y que la lista devuelta por el servicio es igual a la lista que simulamos
		assertEquals(usuarios, Usuarios);
	}

	@Test
	void saveUsuario() {
		when(usuarioRepo.save(usuario)).thenReturn(usuario);
		;

		// Llamar al método del servicio que queremos probar
		Usuario savedUsuario = usuarioServicio.crearUsuario(usuario);

		// Verificar si el método del repositorio fue llamado correctamente
		verify(usuarioRepo).save(usuario);

		// Verificar si el objeto devuelto es el mismo que el objeto guardado
		assertEquals(usuario, savedUsuario);
	}

	@Test
	void getById() {
		// Simulamos el comportamiento del repositorio para devolver un Optional con el
		// partner1
		when(usuarioRepo.findById(id)).thenReturn(Optional.of(usuario));

		// Llamamos al método del servicio que queremos probar
		Optional<Usuario> Usuarios = usuarioServicio.obtenerUsuarioPorId(id);

		// Verificamos si el método del repositorio fue llamado correctamente
		verify(usuarioRepo).findById(id);

		// Verificamos si el objeto devuelto es el mismo que el objeto que esperamos
		// obtener
		assertTrue(Usuarios.isPresent());
		assertEquals(usuario, Usuarios.get());
	}

	@Test
	void updateById() {
		// Simulamos el comportamiento del repositorio
		when(usuarioRepo.findById(id)).thenReturn(Optional.of(usuario));
		when(usuarioRepo.save(usuario)).thenReturn(usuario);

		// Llamamos al método del servicio que queremos probar
		Usuario updatedUsuario = usuarioServicio.actualizarUsuario(id, usuario);

		// Verificamos si el método del repositorio fue llamado correctamente
		verify(usuarioRepo).findById(id);
		verify(usuarioRepo).save(usuario);

		// Verificamos si el objeto devuelto es el mismo que el objeto actualizado
		assertEquals(usuario, updatedUsuario);
	}

	@Test
	void deletePartner() {
		// Llamamos al método del servicio que queremos probar
		boolean isDeleted = usuarioServicio.borrarUsuario(id);

		// Verificamos si el método del repositorio fue llamado correctamente
		verify(usuarioRepo).deleteById(id);

		// Verificamos si el objeto fue eliminado correctamente
		assertTrue(isDeleted);

	}
}
