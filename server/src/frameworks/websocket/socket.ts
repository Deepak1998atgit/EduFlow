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




interface CustomSocket extends Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData> {
  room?: string | any;
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

  io.use((socket: CustomSocket, next) => {
    // Authentication check
    // if (socket.handshake.query && socket.handshake.query.token) {
    //     const res: any = authService.verifyToken(socket.handshake.query.token as string);
    //     socket.data.userId = res.payload;
    //     next();
    // } else {
    //     next(new AppError('Authentication token not provided', HttpStatusCodes.UNAUTHORIZED));
    // }
    const room = socket.handshake.auth.room || socket.handshake.headers.room;
    console.log("room", room)
    if (!room) {
      return next(new Error("Invalid room"));
    }
    socket.room = room;
    next();
  }).on('connection', (socket: CustomSocket) => {
    console.log(`User connected: ${socket.id}`);
    socket.on("adduser", (userId: string) => {
      console.log(`Adduser event received for ${userId}`);
      console.log("server started");
      addUser(userId, socket.id);  // Add user to the list
      io.emit("getUsers", users);  // Emit the updated users list to all clients   
    });
    socket.join(socket?.room);
    socket.on(
      "sendMessage",
      (message: {
        senderId: string;
        receiverId: string;
        text: string;
        imageName: string;
        imageUrl: string;
      }) => {
        const user = getUser(message?.receiverId);
        if (user) {
          console.log("message", message, "user", user);

          io.to(socket?.room).emit("getMessage", {
            senderId: message.senderId,
            text: message.text,
            imageName: message.imageName,
            imageUrl: message.imageUrl,
          });

          console.log(message.receiverId, message.text);
        } else {
          console.error("User not found:", message.receiverId);
        }
      }
    );
    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
      removeUser(socket.id);  // Remove the user when they disconnect
      io.emit("getUsers", users);  // Emit the updated users list to all clients
    });
  });
};

export default socketConfig;
