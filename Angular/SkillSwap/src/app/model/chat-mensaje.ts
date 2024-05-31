export interface ChatMessage {
    user: string;
    message: string; // Asegúrate de usar 'message' en lugar de 'content'
    chatId: number;
    userId: number;
    targetUserId: number; // Añadido targetUserId
  }
  