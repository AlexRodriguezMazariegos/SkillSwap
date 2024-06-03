package com.skill_swap.controladores;

import com.skill_swap.dto.ChatMessage;
import com.skill_swap.entidades.Chat;
import com.skill_swap.entidades.Usuario;
import com.skill_swap.servicios.ChatServicio;
import com.skill_swap.servicios.MensajeServicio;
import com.skill_swap.servicios.UsuarioServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/chat")
@CrossOrigin(origins = "http://localhost:4200")
public class ChatControlador {

    @Autowired
    private MensajeServicio mensajeServicio;

    @Autowired
    private ChatServicio chatServicio;

    @Autowired
    private UsuarioServicio usuarioServicio;

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @GetMapping("")
    public List<Chat> obtenerTodosLosChats() {
        return chatServicio.obtenerTodosLosChats();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Chat>> obtenerChatPorId(@PathVariable Long id) {
        Optional<Chat> chat = chatServicio.obtenerChatPorId(id);
        return chat.map(value -> ResponseEntity.status(HttpStatus.OK).body(chat))
                   .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }
    
    @PostMapping("/get-or-create")
    public ResponseEntity<Chat> getOrCreateChat(@RequestBody Map<String, Long> userIds) {
        Long usuarioId1 = userIds.get("usuarioId1");
        Long usuarioId2 = userIds.get("usuarioId2");

        if (usuarioId1 == null || usuarioId2 == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        // Accede a la instancia de ChatServicio usando this
        Chat chat = chatServicio.obtenerChatPorUsuarios(usuarioId1, usuarioId2);
        return ResponseEntity.status(HttpStatus.OK).body(chat);
    }

    @PostMapping("/crear")
    public ResponseEntity<Chat> crearChat(@RequestBody Chat chat) {
        return ResponseEntity.status(HttpStatus.CREATED).body(chatServicio.crearChat(chat));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Chat> actualizarChat(@PathVariable Long id, @RequestBody Chat chat) {
        Optional<Chat> chatExistente = chatServicio.obtenerChatPorId(id);
        return chatExistente.map(c -> ResponseEntity.status(HttpStatus.OK).body(chatServicio.actualizarChat(id, chat)))
                            .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> borrarChat(@PathVariable Long id) {
        Optional<Chat> chat = chatServicio.obtenerChatPorId(id);
        if (chat.isPresent()) {
            chatServicio.borrarChat(id);
            return ResponseEntity.status(HttpStatus.OK).build();
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/chat/{roomId}")
    public ChatMessage chat(@PathVariable Long roomId, @RequestBody ChatMessage message) {
        Usuario usuario = usuarioServicio.obtenerUsuarioPorNombre(message.getUser());
        if (usuario == null) {
            throw new RuntimeException("Usuario no encontrado: " + message.getUser());
        }

        Usuario targetUser = usuarioServicio.obtenerUsuarioPorId(message.getTargetUserId())
                                            .orElseThrow(() -> new RuntimeException("Usuario objetivo no encontrado: " + message.getTargetUserId()));

        Chat chat = chatServicio.obtenerChatPorUsuarios(usuario.getId(), targetUser.getId());
        if (chat == null) {
            chat = chatServicio.crearChat(new Chat(usuario, targetUser));
        }

        ChatMessage savedMessage = mensajeServicio.crearMensaje(message, usuario, chat);
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

    @GetMapping("/saludo/{nombre}")
    public String saludo(@PathVariable String nombre) {
        return "Hola, " + nombre + "!";
    }
}
