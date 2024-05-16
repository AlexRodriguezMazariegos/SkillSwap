package com.skill_swap.servicios.test;

import com.skill_swap.entidades.Articulo;
import com.skill_swap.entidades.Comentario;
import com.skill_swap.entidades.Usuario;
import com.skill_swap.repositorios.ComentarioRepositorio;
import com.skill_swap.servicios.ComentarioServicio;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ComentarioServicioTest {

    @Mock
    private ComentarioRepositorio comentarioRepositorio;

    @InjectMocks
    private ComentarioServicio comentarioServicio;

    @Test
    void testObtenerTodosLosComentarios() {
        List<Comentario> listaComentarios = Arrays.asList(
                new Comentario(1L, null, null, new Date(), "Texto 1"),
                new Comentario(2L, null, null, new Date(), "Texto 2")
        );
        when(comentarioRepositorio.findAll()).thenReturn(listaComentarios);

        List<Comentario> resultado = comentarioServicio.obtenerTodosLosComentarios();

        assertEquals(2, resultado.size());
    }

    @Test
    void testObtenerComentarioPorIdExistente() {
        Comentario comentario = new Comentario(1L, null, null, new Date(), "Texto");
        when(comentarioRepositorio.findById(1L)).thenReturn(Optional.of(comentario));

        Optional<Comentario> resultado = comentarioServicio.obtenerComentarioPorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(comentario, resultado.get());
    }

    @Test
    void testObtenerComentarioPorIdNoExistente() {
        when(comentarioRepositorio.findById(1L)).thenReturn(Optional.empty());

        Optional<Comentario> resultado = comentarioServicio.obtenerComentarioPorId(1L);

        assertFalse(resultado.isPresent());
    }

    @Test
    void testCrearComentario() {
        Comentario nuevoComentario = new Comentario(1L, new Usuario(), new Articulo(), new Date(), "Nuevo comentario");

        when(comentarioRepositorio.save(nuevoComentario)).thenReturn(nuevoComentario);

        Comentario comentarioCreado = comentarioServicio.crearComentario(nuevoComentario);

        assertNotNull(comentarioCreado);
        assertEquals("Nuevo comentario", comentarioCreado.getTexto());
    }

    @Test
    void testActualizarComentarioExistente() {
        Comentario comentarioExistente = new Comentario(1L, new Usuario(), new Articulo(), new Date(), "Comentario existente");

        when(comentarioRepositorio.findById(1L)).thenReturn(Optional.of(comentarioExistente));

        when(comentarioRepositorio.save(comentarioExistente)).thenReturn(comentarioExistente);

        Comentario comentarioActualizado = comentarioServicio.actualizarComentario(1L, comentarioExistente);

        assertNotNull(comentarioActualizado);
        assertEquals("Comentario existente", comentarioActualizado.getTexto());
    }

    @Test
    void testActualizarComentarioNoExistente() {
        when(comentarioRepositorio.findById(1L)).thenReturn(Optional.empty());

        Comentario comentarioActualizado = comentarioServicio.actualizarComentario(1L, new Comentario());

        assertNull(comentarioActualizado);
    }

    @Test
    void testBorrarComentario() {
        when(comentarioRepositorio.existsById(1L)).thenReturn(true);

        boolean resultado = comentarioServicio.borrarComentario(1L);

        assertTrue(resultado);
    }

    @Test
    void testBorrarComentarioNoExistente() {
        when(comentarioRepositorio.existsById(1L)).thenReturn(false);

        boolean resultado = comentarioServicio.borrarComentario(1L);

        assertFalse(resultado);
    }
}
