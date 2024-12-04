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
    app.use(cors())
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

};

export default expressConfig; 