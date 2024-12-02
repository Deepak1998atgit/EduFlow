import express from 'express';
import studentController from '../../.././adapters/controllers/studentController';
import { studentDbRepository } from '../../../app/repositories/studentDbRepository';
import { studentRepositoryMongoDB } from '../../../frameworks/database/mongodb/repositories/studentsRepoMongoDb';
import { authService } from '../../../frameworks/services/authService';
import { authServiceInterface } from '../../../app/services/authServicesInterface';
import { RedisClient } from 'server';
import { cloudServiceInterface } from '../../../app/services/cloudServiceInterface';
import { cloudinaryService } from '../../../frameworks/services/cloudinaryService';
import { cacheRepositoryInterface } from '@src/app/repositories/cachedRepoInterface';
import { redisCacheRepository } from '@src/frameworks/database/redis/redisCacheRepository';
import { cachingMiddleware } from '../middlewares/redisCaching';
import jwtAuthMiddleware from '../middlewares/userAuth';
import upload from '../middlewares/multer';



const studentRouter = (redisClient: RedisClient) => {
    const router = express.Router();
    const controller = studentController(
        authServiceInterface,
        authService,
        studentDbRepository,
        studentRepositoryMongoDB,
        cloudServiceInterface,
        cloudinaryService,
        cacheRepositoryInterface,
        redisCacheRepository,
        redisClient
    );


    router.patch(
        '/change-password',
        jwtAuthMiddleware,
        controller.changePassword
    );

    router.put(
        '/update-profile',
        jwtAuthMiddleware,
        upload.single('image'),
        controller.updateProfile
    );

    router.get(
        '/get-student-details',
        jwtAuthMiddleware,
        cachingMiddleware(redisClient),
        controller.getStudentDetails
    );


    return router;
};

export default studentRouter;