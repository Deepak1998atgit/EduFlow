import express, { Request, Response } from 'express';
import authController from "../../../adapters/controllers/authController";
import { authServiceInterface } from "../../../app/services/authServicesInterface";
import { authService } from "../../services/authService";
import { studentDbRepository } from '../../../app/repositories/studentDbRepository';
import { studentRepositoryMongoDB } from '../../../frameworks/database/mongodb/repositories/studentsRepoMongoDb'
import { instructorDbRepository } from "../../../app/repositories/instructorDbRepository"
import { instructorRepoMongoDb } from "../../../frameworks/database/mongodb/repositories/instructorRepoMongoDb"
import { adminDbRepository } from "../../../app/repositories/adminDbRepository";
import { adminRepoMongoDb } from "../../../frameworks/database/mongodb/repositories/adminRepoMongoDb";
import {googleAuthService} from "../../../frameworks/services/googleAuthService"
import { googleAuthServiceInterface } from "../../../app/services/googleAuthServicesInterface";
import {nodeMailService} from "../../../frameworks/services/nodeMailservice"
import { nodemailerServiceInterface } from "../../../app/services/nodeMailerService";
import upload from "../middlewares/multer";
import { cloudinaryService} from "../../../frameworks/services/cloudinaryService";
import { cloudServiceInterface } from "../../../app/services/cloudServiceInterface";
import { refreshTokenDbRepository } from "../../../app/repositories/refreshTokenDBRepository";
import { refreshTokenRepositoryMongoDB } from "../../../frameworks/database/mongodb/repositories/refreshTokenRepoMongoDb";

const authRouter = () => {
    const router = express.Router();
    const controller = authController(
        authServiceInterface,
        authService,
        cloudServiceInterface,
        cloudinaryService,
        studentDbRepository,
        studentRepositoryMongoDB,
        instructorDbRepository,
        instructorRepoMongoDb,
        adminDbRepository,
        adminRepoMongoDb,
        googleAuthServiceInterface,
        googleAuthService,
        nodemailerServiceInterface,
        nodeMailService,
        refreshTokenDbRepository,
        refreshTokenRepositoryMongoDB
    );
    


    //STUDENT
    router.post("/student-register", controller.registerStudent);
    router.post("/student-login", controller.loginStudent);
    router.post("/login-with-google", controller.loginWithGoogle);
    router.post("/forgot-password/send-otp", controller.sendotp);
    router.post("/forgot-password/verify-Otp", controller.verifyOtp);
    router.post("/forgot-password/change-password", controller.changePasswordAfterForgot);
    

    //INSTRUCTOR
    router.post("/instructor/instructor-register",upload.array('images'), controller.registerInstructor);
    router.post("/instructor/instructor-login", controller.loginInstructor);
    router.post("/login-with-google-instructor", controller.loginWithGoogleByInstructor);
   

    //ADMIN
    router.post("/admin/admin-login", controller.loginAdmin);
    return router;
}



export default authRouter;