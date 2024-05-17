package com.skill_swap.servicios.test;

import com.skill_swap.entidades.Chat;
import com.skill_swap.repositorios.ChatRepositorio;
import com.skill_swap.servicios.ChatServicio;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ChatServicioTest {

    @Mock
    private ChatRepositorio chatRepositorio;

    @InjectMocks
    private ChatServicio chatServicio;

    @Test
    void testObtenerTodosLosChats() {
        List<Chat> listaChats = Arrays.asList(
                new Chat(1L, null, null),
                new Chat(2L, null, null)
        );
        when(chatRepositorio.findAll()).thenReturn(listaChats);

        List<Chat> resultado = chatServicio.obtenerTodosLosChats();

        assertEquals(2, resultado.size());
    }

    @Test
    void testObtenerChatPorIdExistente() {
        Chat chat = new Chat(1L, null, null);
        when(chatRepositorio.findById(1L)).thenReturn(Optional.of(chat));

        Optional<Chat> resultado = chatServicio.obtenerChatPorId(1L);

        assertTrue(resultado.isPresent());
        assertEquals(chat, resultado.get());
    }

    @Test
    void testObtenerChatPorIdNoExistente() {
        when(chatRepositorio.findById(1L)).thenReturn(Optional.empty());

        Optional<Chat> resultado = chatServicio.obtenerChatPorId(1L);

        assertFalse(resultado.isPresent());
    }

    @Test
    void testCrearChat() {
        Chat nuevoChat = new Chat(1L, null, null);

        when(chatRepositorio.save(nuevoChat)).thenReturn(nuevoChat);

        Chat chatCreado = chatServicio.crearChat(nuevoChat);

        assertNotNull(chatCreado);
        assertEquals(nuevoChat.getId(), chatCreado.getId());
    }

    @Test
    void testActualizarChatExistente() {
        Chat chatExistente = new Chat(1L, null, null);

        when(chatRepositorio.findById(1L)).thenReturn(Optional.of(chatExistente));

        when(chatRepositorio.save(chatExistente)).thenReturn(chatExistente);

        Chat chatActualizado = chatServicio.actualizarChat(1L, chatExistente);

        assertNotNull(chatActualizado);
        assertEquals(chatExistente.getId(), chatActualizado.getId());
    }

    @Test
    void testActualizarChatNoExistente() {
        when(chatRepositorio.findById(1L)).thenReturn(Optional.empty());

        Chat chatActualizado = chatServicio.actualizarChat(1L, new Chat());

        assertNull(chatActualizado);
    }

    @Test
    void testBorrarChat() {
        when(chatRepositorio.existsById(1L)).thenReturn(true);

        boolean resultado = chatServicio.borrarChat(1L);

        assertTrue(resultado);
    }

    @Test
    void testBorrarChatNoExistente() {
        when(chatRepositorio.existsById(1L)).thenReturn(false);

        boolean resultado = chatServicio.borrarChat(1L);

        assertFalse(resultado);
    }
}
