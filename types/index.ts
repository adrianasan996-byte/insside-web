export type UserRole = "patient" | "professional" | "admin";
export interface Professional {
  id: string; name: string; title: string; specialties: string[];
  rating: number; reviewCount: number; sessionPrice: number; currency: string;
  image?: string; bio: string; city: string; country: string;
  modalities: ("online" | "presencial" | "domicilio")[]; languages: string[];
  category?: string;
}
export interface Session {
  id: string; professionalId: string; professionalName: string; professionalImage?: string;
  patientId: string; patientName: string; date: string; time: string; duration: number;
  modality: "online" | "presencial" | "domicilio"; status: "scheduled" | "completed" | "cancelled" | "pending";
  price: number; currency: string;
  sessionNumber?: number; sessionsAvailable?: number; specialties?: string[];
}
export interface Conversation {
  id: string; participantId: string; participantName: string; participantImage?: string;
  lastMessage: string; lastMessageTime: string; unreadCount: number; online: boolean;
}
export interface Notification {
  id: string; type: "message" | "session" | "payment" | "system";
  title: string; description: string; time: string; read: boolean;
}
