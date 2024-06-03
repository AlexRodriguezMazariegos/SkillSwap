package com.skill_swap.servicios;

import com.skill_swap.entidades.Chat;
import com.skill_swap.entidades.Usuario;
import com.skill_swap.repositorios.ChatRepositorio;
import com.skill_swap.repositorios.UsuarioRepositorio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChatServicio {

    @Autowired
    private ChatRepositorio chatRepositorio;
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

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
        return chatRepositorio.findByUsuario1IdAndUsuario2IdOrUsuario2IdAndUsuario1Id(usuarioId1, usuarioId2, usuarioId1, usuarioId2)
                .orElseGet(() -> {
                    Usuario usuario1 = usuarioRepositorio.findById(usuarioId1).orElse(null);
                    Usuario usuario2 = usuarioRepositorio.findById(usuarioId2).orElse(null);
                    if (usuario1 == null || usuario2 == null) {
                        throw new IllegalArgumentException("Usuarios no encontrados");
                    }
                    
                    Chat nuevoChat = new Chat();
                    nuevoChat.setUsuario1(usuario1);
                    nuevoChat.setUsuario2(usuario2);
                    return chatRepositorio.save(nuevoChat);
                });
    }
    
    
}
