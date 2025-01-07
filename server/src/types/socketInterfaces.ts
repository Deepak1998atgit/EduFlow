interface User {
    userId: string;
    socketId: string;
    lastSeen: number;
}

export interface ServerToClientEvents {
    receive_message: (data: any) => void,
    response_data: (data: any) => void;
    getUsers: (users: User[]) => void; 
}

export interface ClientToServerEvents {
    join_room: (data: string) => void,
    send_message: (data: { message: string, course: string }) => void,
    request_data: (data: any) => void
    adduser: (userId: string) => void;
}

export interface InterServerEvents {

}

export interface SocketData {
    userId: string
}