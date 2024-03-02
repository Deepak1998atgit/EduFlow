import express, { Application, NextFunction } from 'express';
import connectDB from './src/frameworks/database/mongodb/connection';
import expressConfig from './src/frameworks/webserver/express';
import serverConfig from './src/frameworks/webserver/server';
import http from 'http';
import routes from './src/frameworks/webserver/routes';
import errorHandlingMiddleware from './src/frameworks/webserver/middlewares/errorHandling';



const port = 5000;

const app: Application = express();
const server = http.createServer(app);

//* connecting mongoDb 
connectDB();

//* express config connection
expressConfig(app);


//* routes for each endpoint
routes(app);


//* handles server side errors
app.use(errorHandlingMiddleware);


//* starting the server with server config
serverConfig(server).startServer();



