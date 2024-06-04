package com.skill_swap.controladores;

import com.skill_swap.dto.ChatMessage;
import com.skill_swap.entidades.Chat;
import com.skill_swap.entidades.Usuario;
import com.skill_swap.servicios.ChatServicio;
import com.skill_swap.servicios.MensajeServicio;
import com.skill_swap.servicios.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/chat")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ChatController {

    @Autowired
    private MensajeServicio mensajeServicio;

    @Autowired
    private ChatServicio chatServicio;

    @Autowired
    private UsuarioServicio usuarioServicio;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @PostMapping("/chat/{roomId}")
    public ChatMessage chat(@PathVariable Long roomId, @RequestBody ChatMessage message) {
        Usuario usuario = usuarioServicio.obtenerUsuarioPorNombre(message.getUser());
        if (usuario == null) {
            throw new RuntimeException("Usuario no encontrado: " + message.getUser());
        }

        Usuario targetUser = usuarioServicio.obtenerUsuarioPorId(message.getTargetUserId())
                                            .orElseThrow(() -> new RuntimeException("Usuario objetivo no encontrado: " + message.getTargetUserId()));

        // Verificar si ya existe una sala de chat entre los usuarios
        Chat chat = chatServicio.obtenerChatPorUsuarios(usuario.getId(), targetUser.getId());

        // Si no existe la sala de chat, crear una nueva
        if (chat == null) {
            chat = chatServicio.crearChat(new Chat(usuario, targetUser));
        }

        ChatMessage savedMessage = mensajeServicio.crearMensaje(message, usuario, chat, targetUser);

        // Enviar el mensaje a los clientes suscritos
        messagingTemplate.convertAndSend("/topic/" + roomId, savedMessage);

        return savedMessage;
    }

    @GetMapping("/history/{roomId}")
    public List<ChatMessage> getChatHistory(@PathVariable Long roomId) {
        return mensajeServicio.obtenerMensajesPorChatId(roomId);
    }

    @GetMapping("/history/{roomId}/{userId}")
    public List<ChatMessage> getChatHistoryByUser(@PathVariable Long roomId, @PathVariable Long userId) {
        return mensajeServicio.obtenerMensajesPorChatIdYUsuarioId(roomId, userId);
    }
}
