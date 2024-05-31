package com.skill_swap.servicios;

import com.skill_swap.entidades.Chat;
import com.skill_swap.repositorios.ChatRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChatServicio {

    @Autowired
    private ChatRepositorio chatRepositorio;

    public List<Chat> obtenerTodosLosChats() {
        return chatRepositorio.findAll();
    }

    public Optional<Chat> obtenerChatPorId(Long id) {
        return chatRepositorio.findById(id);
    }

    public Chat crearChat(Chat chat) {
        return chatRepositorio.save(chat);
    }

    public Chat actualizarChat(Long id, Chat chat) {
        if (chatRepositorio.findById(id).isPresent()) {
            Chat chatAModificar = chatRepositorio.findById(id).get();
            chatAModificar.setUsuario1(chat.getUsuario1());
            chatAModificar.setUsuario2(chat.getUsuario2());
            return chatRepositorio.save(chatAModificar);
        } else {
            return null;
        }
    }

    public Boolean borrarChat(Long id) {
        if (chatRepositorio.existsById(id)) {
            try {
                chatRepositorio.deleteById(id);
                return true;
            } catch (Exception e) {
                return false;
            }
        } else {
            return false;
        }
    }
    
    
    public Chat obtenerChatPorUsuarios(Long usuarioId1, Long usuarioId2) {
        return chatRepositorio.findByUsuarioId1AndUsuarioId2(usuarioId1, usuarioId2);
    }
}
