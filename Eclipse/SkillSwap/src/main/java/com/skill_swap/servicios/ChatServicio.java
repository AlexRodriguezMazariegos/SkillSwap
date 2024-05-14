package com.skill_swap.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.skill_swap.entidades.Chat;
import com.skill_swap.repositorios.ChatRepositorio;

@Service
public class ChatServicio {

    private final ChatRepositorio chatRepositorio;

    @Autowired
    public ChatServicio(ChatRepositorio chatRepositorio) {
        this.chatRepositorio = chatRepositorio;
    }

    // Método para crear un nuevo chat
    public Chat crearChat(Chat chat) {
        return chatRepositorio.save(chat);
    }

    // Método para obtener un chat por ID
    public Optional<Chat> obtenerChatPorId(Long id) {
        return chatRepositorio.findById(id);
    }

    // Método para obtener todos los chats
    public List<Chat> obtenerTodosLosChats() {
        return chatRepositorio.findAll();
    }

    // Método para actualizar un chat
    public Chat actualizarChat(Chat chat) {
        return chatRepositorio.save(chat);
    }

    // Método para eliminar un chat por ID
    public void eliminarChat(Long id) {
        chatRepositorio.deleteById(id);
    }
}
