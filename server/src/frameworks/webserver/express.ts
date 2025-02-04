import express, { Application, NextFunction } from 'express';
import connectToMongoDb from '../database/mongodb/connection';
import morgan from 'morgan';
import cors from 'cors';
import configKeys from '../../../config';



const expressConfig = (app: Application) => {
    // Development logging
    if (configKeys.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }
    app.use(cors({ origin: "http://localhost:3000", credentials: true }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

};

export default expressConfig; 