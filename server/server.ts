import express, { Application, NextFunction } from 'express';
import connectDB from './src/frameworks/database/mongodb/connection';
import expressConfig from './src/frameworks/webserver/express';
import routes from './src/frameworks/webserver/routes';



const port = 5000;

const app: Application = express();

//* connecting mongoDb 
connectDB();

//* express config connection
expressConfig(app);

//* routes for each endpoint
routes(app);








app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
