package com.skill_swap.servicios.test;

import com.skill_swap.entidades.Articulo;
import com.skill_swap.repositorios.ArticuloRepositorio;
import com.skill_swap.servicios.ArticuloServicio;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.sql.Date;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ArticuloServicioTest {

    @Mock
    private ArticuloRepositorio articuloRepositorio;

    @InjectMocks
    private ArticuloServicio articuloServicio;

    @Test
    void testObtenerTodosLosArticulos() {
        List<Articulo> listaArticulos = Arrays.asList(
                new Articulo(1L, null, "Contenido 1", "Descripción 1", "Título 1", null),
                new Articulo(2L, null, "Contenido 2", "Descripción 2", "Título 2", null)
        );
        when(articuloRepositorio.findAll()).thenReturn(listaArticulos);

        List<Articulo> resultado = articuloServicio.obtenerTodosLosArticulos();

        assertEquals(2, resultado.size());
    }

    @Test
    void testObtenerArticuloPorIdExistente() {
        Articulo articulo = new Articulo(1L, null, "Contenido", "Descripción", "Título", null);
        when(articuloRepositorio.findById(1L)).thenReturn(Optional.of(articulo));

        Optional<Articulo> resultado = articuloServicio.obtenerArticuloPorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(articulo, resultado.get());
    }

    @Test
    void testObtenerArticuloPorIdNoExistente() {
        when(articuloRepositorio.findById(1L)).thenReturn(Optional.empty());

        Optional<Articulo> resultado = articuloServicio.obtenerArticuloPorId(1L);

        assertFalse(resultado.isPresent());
    }

    @Test
    void testCrearArticulo() {
        Articulo nuevoArticulo = new Articulo(null, null, "Contenido Nuevo", "Descripción Nuevo", "Título Nuevo", new Date(System.currentTimeMillis()));

        when(articuloRepositorio.save(nuevoArticulo)).thenReturn(nuevoArticulo);

        Articulo articuloCreado = articuloServicio.crearArticulo(nuevoArticulo);

        assertNotNull(articuloCreado);
        assertEquals("Contenido Nuevo", articuloCreado.getContenido());
        assertEquals("Descripción Nuevo", articuloCreado.getDescripcion());
        assertEquals("Título Nuevo", articuloCreado.getTitulo());
        assertNotNull(articuloCreado.getFechaPublicacion());
    }

    @Test
    void testActualizarArticuloExistente() {
        Articulo articuloExistente = new Articulo(1L, null, "Contenido Antiguo", "Descripción Antigua", "Título Antiguo", new Date(System.currentTimeMillis()));
        Articulo datosActualizados = new Articulo(1L, null, "Contenido Nuevo", "Descripción Nuevo", "Título Nuevo", new Date(System.currentTimeMillis()));

        when(articuloRepositorio.findById(1L)).thenReturn(Optional.of(articuloExistente));
        when(articuloRepositorio.save(articuloExistente)).thenReturn(datosActualizados);

        Articulo articuloActualizado = articuloServicio.actualizarArticulo(1L, datosActualizados);

        assertNotNull(articuloActualizado);
        assertEquals("Contenido Nuevo", articuloActualizado.getContenido());
        assertEquals("Descripción Nuevo", articuloActualizado.getDescripcion());
        assertEquals("Título Nuevo", articuloActualizado.getTitulo());
    }

    @Test
    void testActualizarArticuloNoExistente() {
        when(articuloRepositorio.findById(1L)).thenReturn(Optional.empty());

        Articulo articuloActualizado = articuloServicio.actualizarArticulo(1L, new Articulo());

        assertNull(articuloActualizado);
    }

    @Test
    void testBorrarArticulo() {
        when(articuloRepositorio.existsById(1L)).thenReturn(true);

        boolean resultado = articuloServicio.eliminarArticulo(1L);

        assertTrue(resultado);
    }

    @Test
    void testBorrarArticuloExistente() {
        Long idExistente = 1L;
        when(articuloRepositorio.existsById(idExistente)).thenReturn(true);

        boolean resultado = articuloServicio.eliminarArticulo(idExistente);

        assertTrue(resultado);
    }

    @Test
    void testBorrarArticuloNoExistente() {
        Long idNoExistente = 1L;
        when(articuloRepositorio.existsById(idNoExistente)).thenReturn(false);

        boolean resultado = articuloServicio.eliminarArticulo(idNoExistente);

        assertFalse(resultado);
    }

}
