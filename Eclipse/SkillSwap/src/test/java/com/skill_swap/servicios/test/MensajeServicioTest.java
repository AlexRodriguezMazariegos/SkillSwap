package com.skill_swap.servicios.test;

import com.skill_swap.entidades.Chat;
import com.skill_swap.entidades.Mensaje;
import com.skill_swap.entidades.Usuario;
import com.skill_swap.repositorios.MensajeRepositorio;
import com.skill_swap.servicios.MensajeServicio;
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
public class MensajeServicioTest {

    @Mock
    private MensajeRepositorio mensajeRepositorio;

    @InjectMocks
    private MensajeServicio mensajeServicio;

    @Test
 //   void testObtenerTodosLosMensajes() {
   //     List<Mensaje> listaMensajes = Arrays.asList(
     //           new Mensaje(1L, null, null, "Texto 1", new Date()),
       //         new Mensaje(2L, null, null, "Texto 2", new Date())
        //);
        //when(mensajeRepositorio.findAll()).thenReturn(listaMensajes);

        //List<Mensaje> resultado = mensajeServicio.obtenerTodosLosMensajes();

      //  assertEquals(2, resultado.size());
  //  }

    //@Test
    void testObtenerMensajePorIdExistente() {
        Mensaje mensaje = new Mensaje(1L, null, null, "Texto", new Date());
        when(mensajeRepositorio.findById(1L)).thenReturn(Optional.of(mensaje));

        Optional<Mensaje> resultado = mensajeServicio.obtenerMensajePorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(mensaje, resultado.get());
    }

    @Test
    void testObtenerMensajePorIdNoExistente() {
        when(mensajeRepositorio.findById(1L)).thenReturn(Optional.empty());

        Optional<Mensaje> resultado = mensajeServicio.obtenerMensajePorId(1L);

        assertFalse(resultado.isPresent());
    }

    @Test
    void testCrearMensaje() {
        Mensaje nuevoMensaje = new Mensaje(1L, new Usuario(), new Chat(), "Nuevo mensaje", new Date());

        when(mensajeRepositorio.save(nuevoMensaje)).thenReturn(nuevoMensaje);

        Mensaje mensajeCreado = mensajeServicio.crearMensaje(nuevoMensaje);

        assertNotNull(mensajeCreado);
        assertEquals("Nuevo mensaje", mensajeCreado.getTexto());
    }

    @Test
    void testActualizarMensajeExistente() {
        Mensaje mensajeExistente = new Mensaje(1L, new Usuario(), new Chat(), "Mensaje existente", new Date());

        when(mensajeRepositorio.findById(1L)).thenReturn(Optional.of(mensajeExistente));

        when(mensajeRepositorio.save(mensajeExistente)).thenReturn(mensajeExistente);

        Mensaje mensajeActualizado = mensajeServicio.actualizarMensaje(1L, mensajeExistente);

        assertNotNull(mensajeActualizado);
        assertEquals("Mensaje existente", mensajeActualizado.getTexto());
    }

    @Test
    void testActualizarMensajeNoExistente() {
        when(mensajeRepositorio.findById(1L)).thenReturn(Optional.empty());

        Mensaje mensajeActualizado = mensajeServicio.actualizarMensaje(1L, new Mensaje());

        assertNull(mensajeActualizado);
    }

    @Test
    void testBorrarMensajeExistente() {
        Long idExistente = 1L;
        when(mensajeRepositorio.existsById(idExistente)).thenReturn(true);

        boolean resultado = mensajeServicio.borrarMensaje(idExistente);

        assertTrue(resultado);
    }

    @Test
    void testBorrarMensajeNoExistente() {
        Long idNoExistente = 1L;
        when(mensajeRepositorio.existsById(idNoExistente)).thenReturn(false);

        boolean resultado = mensajeServicio.borrarMensaje(idNoExistente);

        assertFalse(resultado);
    }

}
