package com.skill_swap.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.skill_swap.entidades.Chat;
import com.skill_swap.servicios.ChatServicio;

@RestController
@RequestMapping("/api/v1/chat")
public class ChatControlador {

    private final ChatServicio chatServicio;

    @Autowired
    public ChatControlador(ChatServicio chatServicio) {
        this.chatServicio = chatServicio;
    }

    // Método para crear un nuevo chat
    @PostMapping
    public Chat crearChat(@RequestBody Chat chat) {
        return chatServicio.crearChat(chat);
    }

    // Método para obtener un chat por ID
    @GetMapping("/{id}")
    public ResponseEntity<Chat> obtenerChatPorId(@PathVariable Long id) {
        return chatServicio.obtenerChatPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Método para obtener todos los chats
    @GetMapping
    public List<Chat> obtenerTodosLosChats() {
        return chatServicio.obtenerTodosLosChats();
    }

    // Método para actualizar un chat
    @PutMapping("/{id}")
    public Chat actualizarChat(@PathVariable Long id, @RequestBody Chat chat) {
        chat.setId_chat(id);
        return chatServicio.actualizarChat(chat);
    }

    // Método para eliminar un chat por ID
    @DeleteMapping("/{id}")
    public void eliminarChat(@PathVariable Long id) {
        chatServicio.eliminarChat(id);
    }
}
