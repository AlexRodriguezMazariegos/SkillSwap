import { chat } from './chat';
import { usuario } from './usuario';

export interface mensaje {
  id: number;
  usuario: usuario;
  chat: chat;
  texto: string;
  fecha: Date;
}
