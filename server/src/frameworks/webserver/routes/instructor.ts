import express from 'express';
import { instructorRepoMongoDb } from '../../../frameworks/database/mongodb/repositories/instructorRepoMongoDb';
import { nodemailerServiceInterface } from '../../../app/services/nodeMailerServiceInterface';
import { nodeMailService } from '../../../frameworks/services/nodeMailservice';
import { instructorDbRepository } from '../../../app/repositories/instructorDbRepository';
import instructorController from '../../../adapters/controllers/instructorController';
import { authService } from '../../../frameworks/services/authService';
import { authServiceInterface } from '../../../app/services/authServicesInterface';
import { cloudServiceInterface } from '../../../app/services/cloudServiceInterface';
import { cloudinaryService } from '../../../frameworks/services/cloudinaryService';
import upload from '../middlewares/multer';
import { courseDbRepository } from '../../../app/repositories/courseDbRepository';
import { courseRepositoryMongodb } from '../../../frameworks/database/mongodb/repositories/courseReposMongoDb';

const instructorRouter = () => {
    const router = express.Router();
    const controller = instructorController(
        authServiceInterface,
        authService,
        instructorDbRepository,
        instructorRepoMongoDb,
        nodemailerServiceInterface,
        nodeMailService,
        cloudServiceInterface,
        cloudinaryService
    );
    //* Instructor management
    router.get('/view-instructor-requests', controller.getInstructorRequests);


    router.put('/reject-instructor-request', controller.rejectRequest);


    router.patch('/accept-instructor-request/:instructorId',controller.verifyInstructor);


    router.get('/get-all-instructors', controller.getAllInstructor);


    router.patch('/get-all-instructors/block-instructors', controller.blockInstructor);


    router.patch('/get-all-instructors/unblock-instructors/:instructorId', controller.unblockInstructor);


    router.get('/get-blocked-instructors', controller.getBlockedInstructor);


    router.get('/view-instructor/:instructorId', controller.getInstructorById);


    return router;

};

export default instructorRouter;