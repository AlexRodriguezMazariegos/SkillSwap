package com.skill_swap.controladores;


import com.skill_swap.dto.ChatMessage;
import com.skill_swap.entidades.Chat;
import com.skill_swap.entidades.Usuario;
import com.skill_swap.servicios.ChatServicio;
import com.skill_swap.servicios.MensajeServicio;
import com.skill_swap.servicios.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;


import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/v1/chat")
@CrossOrigin(origins = "http://localhost:4200")

public class ChatController {

    @Autowired
    private MensajeServicio mensajeServicio;

    @Autowired
    private ChatServicio chatServicio;

    @Autowired
    private UsuarioServicio usuarioServicio;

    @MessageMapping("/chat/{roomId}")
    @SendTo("/topic/{roomId}")
    public ChatMessage chat(@DestinationVariable Long roomId, ChatMessage message) {
        Usuario usuario = usuarioServicio.obtenerUsuarioPorNombre(message.getUser());

        if (usuario == null) {
            throw new RuntimeException("Usuario no encontrado: " + message.getUser());
        }

        Optional<Chat> optionalChat = chatServicio.obtenerChatPorId(roomId);

        if (optionalChat.isEmpty()) {
            throw new RuntimeException("Chat no encontrado: " + roomId);
        }

        Chat chat = optionalChat.get();

        return mensajeServicio.crearMensaje(message, usuario, chat);
    }

    @GetMapping("/chat/history/{roomId}")
    @ResponseBody
    public List<ChatMessage> getChatHistory(@PathVariable Long roomId) {
        return mensajeServicio.obtenerMensajesPorChatId(roomId);
    }

    @GetMapping("/chat/history/{roomId}/{userId}")
    @ResponseBody
    public List<ChatMessage> getChatHistoryByUser(@PathVariable Long roomId, @PathVariable Long userId) {
        return mensajeServicio.obtenerMensajesPorChatIdYUsuarioId(roomId, userId);
    }


}
