package com.skill_swap.servicios;

import com.skill_swap.dto.ChatMessage;
import com.skill_swap.entidades.Chat;
import com.skill_swap.entidades.Mensaje;
import com.skill_swap.entidades.Usuario;
import com.skill_swap.repositorios.MensajeRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MensajeServicio {

    @Autowired
    private MensajeRepositorio mensajeRepositorio;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public List<Mensaje> obtenerTodosLosMensajes() {
        return mensajeRepositorio.findAll();
    }

    public Optional<Mensaje> obtenerMensajePorId(Long id) {
        return mensajeRepositorio.findById(id);
    }

    public ChatMessage crearMensaje(ChatMessage chatMessage, Usuario usuario, Chat chat) {
        Mensaje mensaje = new Mensaje();
        mensaje.setUsuario(usuario);
        mensaje.setChat(chat);
        mensaje.setTexto(chatMessage.getMessage());
        mensaje.setFecha(new Date());
        mensajeRepositorio.save(mensaje);
        return chatMessage;
    }

    public Boolean borrarMensaje(Long id) {
        if (mensajeRepositorio.existsById(id)) {
            try {
                mensajeRepositorio.deleteById(id);
                return true;
            } catch (Exception e) {
                return false;
            }
        } else {
            return false;
        }
    }

    public Mensaje actualizarMensaje(Long id, Mensaje mensaje) {
        if (mensajeRepositorio.findById(id).isPresent()) {
            Mensaje mensajeAModificar = mensajeRepositorio.findById(id).get();
            mensajeAModificar.setId(id);
            mensajeAModificar.setFecha(mensaje.getFecha());
            mensajeAModificar.setTexto(mensaje.getTexto());
            return mensajeRepositorio.save(mensajeAModificar);
        } else {
            return null;
        }
    }

    public List<ChatMessage> obtenerMensajesPorChatId(Long chatId) {
        List<Mensaje> mensajes = mensajeRepositorio.findByChatId(chatId);
        return mensajes.stream()
                .map(mensaje -> new ChatMessage(mensaje.getUsuario().getNombre(), mensaje.getTexto(), mensaje.getChat().getId(), mensaje.getUsuario().getId()))
                .collect(Collectors.toList());
    }

    public List<ChatMessage> obtenerMensajesPorChatIdYUsuarioId(Long chatId, Long userId) {
        List<Mensaje> mensajes = mensajeRepositorio.findByChatIdAndUsuarioId(chatId, userId);
        return mensajes.stream()
                .map(mensaje -> new ChatMessage(mensaje.getUsuario().getNombre(), mensaje.getTexto(), mensaje.getChat().getId(), mensaje.getUsuario().getId()))
                .collect(Collectors.toList());
    }

    public void enviarMensajeAClientes(Mensaje mensaje) {
        ChatMessage chatMessage = new ChatMessage(mensaje.getUsuario().getNombre(), mensaje.getTexto(), mensaje.getChat().getId(), mensaje.getUsuario().getId());
        messagingTemplate.convertAndSend("/topic/" + mensaje.getChat().getId(), chatMessage);
    }
}
