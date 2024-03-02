import express from 'express';
import studentController from '../../.././adapters/controllers/studentController';
import { studentDbRepository } from '../../../app/repositories/studentDbRepository';
import { studentRepositoryMongoDB } from '../../../frameworks/database/mongodb/repositories/studentsRepoMongoDb';
import { authService } from '../../../frameworks/services/authService';
import { authServiceInterface } from '../../../app/services/authServicesInterface';


const studentRouter = () => {
    const router = express.Router();
    const controller = studentController(
    authServiceInterface,
    authService,
    studentDbRepository,
    studentRepositoryMongoDB,
    );
    

    router.patch(
    '/change-password',
    controller.changePassword
    );

    return router;
};

export default studentRouter;