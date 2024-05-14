package com.skill_swap.controladores;

import com.skill_swap.entidades.Mensaje;
import com.skill_swap.servicios.MensajeServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/mensajes")
public class MensajeControlador {

    private final MensajeServicio mensajeServicio;

    @Autowired
    public MensajeControlador(MensajeServicio mensajeServicio) {
        this.mensajeServicio = mensajeServicio;
    }

    // Endpoint para obtener todos los mensajes
    @GetMapping
    public List<Mensaje> obtenerTodosLosMensajes() {
        return mensajeServicio.obtenerTodosLosMensajes();
    }

    // Endpoint para obtener un mensaje por su ID
    @GetMapping("/{id}")
    public Mensaje obtenerMensajePorId(@PathVariable Long id) {
        return mensajeServicio.obtenerMensajePorId(id);
    }

    // Endpoint para crear un nuevo mensaje
    @PostMapping
    public Mensaje crearMensaje(@RequestBody Mensaje mensaje) {
        return mensajeServicio.crearOActualizarMensaje(mensaje);
    }

    // Endpoint para actualizar un mensaje existente
    @PutMapping("/{id}")
    public Mensaje actualizarMensaje(@PathVariable Long id, @RequestBody Mensaje mensaje) {
        mensaje.setId_mensaje(id);
        return mensajeServicio.crearOActualizarMensaje(mensaje);
    }

    // Endpoint para borrar un mensaje por su ID
    @DeleteMapping("/{id}")
    public void borrarMensaje(@PathVariable Long id) {
        mensajeServicio.borrarMensaje(id);
    }
}
