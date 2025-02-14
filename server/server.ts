import express, { Application } from 'express';
import 'tsconfig-paths/register';
import connectDB from './src/frameworks/database/mongodb/connection';
import expressConfig from './src/frameworks/webserver/express';
import serverConfig from './src/frameworks/webserver/server';
import http from 'http';
import connection from './src/frameworks/database/redis/connection';
import routes from './src/frameworks/webserver/routes';
import errorHandlingMiddleware from './src/frameworks/webserver/middlewares/errorHandling';
import { authService } from '@src/frameworks/services/authService';
import socketConfig from '@src/frameworks/websocket/socket';
import { Server } from 'socket.io';
import { ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData } from '@src/types/socketInterfaces';
import configKeys from 'config';
const app: Application = express();
const server = http.createServer(app);

//* web socket connection
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server, {
    cors: {
        origin:"http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
socketConfig(io, authService())
//* connecting mongoDb 
connectDB();

//* connection to redis
const redisClient = connection().createRedisClient();

//* express config connection
expressConfig(app);


//* routes for each endpoint
routes(app, redisClient);


//* handles server side errors
app.use(errorHandlingMiddleware);


//* starting the server with server config
serverConfig(server).startServer();

export type RedisClient = typeof redisClient;



