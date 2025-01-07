import { Server, Socket } from 'socket.io';
import {
    ClientToServerEvents,
    InterServerEvents,
    ServerToClientEvents,
    SocketData,
} from '../../types/socketInterfaces';
import { AuthService } from '../services/authService';
import AppError from '../../utils/appError';
import HttpStatusCodes from '../../constants/HttpStatusCodes';

// User type definition
interface User {
    userId: string;
    socketId: string;
    lastSeen: number;
}

const socketConfig = (
    io: Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>,
    authService: ReturnType<AuthService>
) => {

    let users: User[] = [];

    // methods
    const addUser = (userId: string, socketId: string): void => {
        if (!users.some((user) => user.userId === userId)) {
            users.push({ userId, socketId, lastSeen: Date.now() });
            console.log(`User ${userId} added with socket ID: ${socketId}`);
        }
    };

    const removeUser = (socketId: string): void => {
        users = users.filter((user) => user.socketId !== socketId);
        console.log(`User with socket ID: ${socketId} removed`);
    };

    const getUser = (userId: string): User | undefined => {
        return users.find((user) => user.userId === userId);
    };

    io.use((socket, next) => {
        // Authentication check
        // if (socket.handshake.query && socket.handshake.query.token) {
        //     const res: any = authService.verifyToken(socket.handshake.query.token as string);
        //     socket.data.userId = res.payload;
        //     next();
        // } else {
        //     next(new AppError('Authentication token not provided', HttpStatusCodes.UNAUTHORIZED));
        // }
        next();
    }).on('connection', (socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>) => {
        console.log(`User connected: ${socket.id}`);
        socket.on("adduser", (userId: string) => {
            console.log(`Adduser event received for ${userId}`);
            console.log("server started");
            addUser(userId, socket.id);  // Add user to the list
            io.emit("getUsers", users);  // Emit the updated users list to all clients
        });
        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
            removeUser(socket.id);  // Remove the user when they disconnect
            io.emit("getUsers", users);  // Emit the updated users list to all clients
        });
    });
};

export default socketConfig;
