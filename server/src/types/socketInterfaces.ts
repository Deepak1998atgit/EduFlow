interface Message {
    senderId: string;
    receiverId: string;
    text: string;
    imageName: string;
    imageUrl: string;
}

interface SendMessage {
    senderId: string;
    receiverId: string;
    text: string;
    imageName: string;
    imageUrl: string;
  }

interface User {
    userId: string;
    socketId: string;
    lastSeen: number;
}

export interface ServerToClientEvents {
    receive_message: (data: any) => void;
    response_data: (data: any) => void;
    getUsers: (users: User[]) => void;
    getMessage: (data: Omit<Message, 'receiverId'>) => void;
}

export interface ClientToServerEvents {
    join_room: (data: string) => void;
    sendMessage: (message: SendMessage) => void;
    request_data: (data: any) => void;
    adduser: (userId: string) => void;
    room?:string;
}

export interface InterServerEvents {

}

export interface SocketData {
    userId: string
    
}