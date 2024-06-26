import asyncHandler from 'express-async-handler';
import { StudentsDbInterface } from '../../app/repositories/studentDbRepository';
import { StudentRepositoryMongoDB } from '../../frameworks/database/mongodb/repositories/studentsRepoMongoDb';
import { Request, Response } from 'express';
import { instructorRegister, signInWithGoogleByInstructor, instructorLogin } from '../../app/usecases/auth/instructorAuth';
import { StudentRegisterInterface } from '../../types/studentRegisterInterface';
import { studentRegister, studentLogin, signInWithGoogleByStudent, sendOTP, verifyOTP, changePasswordAfterForgotU } from '../../app/usecases/auth/studentAuth';
import { AuthServiceInterface } from '../../app/services/authServicesInterface';
import { AuthService } from '../../frameworks/services/authService';
import { InstructorInterface } from '../../types/instructorInterface';
import { InstructorDbInterface } from '../../app/repositories/instructorDbRepository';
import { InstructorRepositoryMongoDb } from '../../frameworks/database/mongodb/repositories/instructorRepoMongoDb';
import { AdminDbInterface } from '../../app/repositories/adminDbRepository';
import { AdminRepositoryMongoDb } from '../../frameworks/database/mongodb/repositories/adminRepoMongoDb';
import { adminLogin } from '../../app/usecases/auth/adminAuth';
import { GoogleAuthServiceInterface } from '../../app/services/googleAuthServicesInterface';
import { GoogleAuthService } from '../../frameworks/services/googleAuthService';
import { NodemailerServiceInterface } from '../../app/services/nodeMailerServiceInterface';
import { NodeMailService } from '../../frameworks/services/nodeMailservice';
import { CloudServiceImpl } from '@src/frameworks/services/cloudinaryService';
import { CloudServiceInterface } from '@src/app/services/cloudServiceInterface';
import { RefreshTokenDbInterface } from '@src/app/repositories/refreshTokenDBRepository';
import { RefreshTokenRepositoryMongoDb } from '@src/frameworks/database/mongodb/repositories/refreshTokenRepoMongoDb';




const authController = (
    authServiceInterface: AuthServiceInterface,
    authServiceImpl: AuthService,
    cloudServiceInterface: CloudServiceInterface,
    CloudServiceImpl: CloudServiceImpl,
    studentDbRepository: StudentsDbInterface,
    studentDbRepositoryImpl: StudentRepositoryMongoDB,
    instructorDbRepository: InstructorDbInterface,
    instructorDbRepositoryImpl: InstructorRepositoryMongoDb,
    adminDbRepository: AdminDbInterface,
    adminDbRepositoryImpl: AdminRepositoryMongoDb,
    googleAuthServiceInterface: GoogleAuthServiceInterface,
    googleAuthServiceImpl: GoogleAuthService,
    nodeMailerServiceInterface: NodemailerServiceInterface,
    nodeMailerServiceImpl: NodeMailService,
    refreshTokenDbRepository: RefreshTokenDbInterface,
    refreshTokenDbRepositoryImpl: RefreshTokenRepositoryMongoDb
) => {
    const dbRepositoryUser = studentDbRepository(studentDbRepositoryImpl());
    const dbRepositoryInstructor = instructorDbRepository(instructorDbRepositoryImpl());
    const dbRepositoryAdmin = adminDbRepository(adminDbRepositoryImpl());
    const authService = authServiceInterface(authServiceImpl());
    const nodeMailerService = nodeMailerServiceInterface(nodeMailerServiceImpl());
    const googleAuthService = googleAuthServiceInterface(googleAuthServiceImpl());
    const cloudService = cloudServiceInterface(CloudServiceImpl())
    const dbRepositoryRefreshToken = refreshTokenDbRepository(refreshTokenDbRepositoryImpl());


    //STUDENT REGISTRATION 
    const registerStudent = asyncHandler(async (req: Request, res: Response) => {
        console.log(req.body)
        const student: StudentRegisterInterface = req.body;
        await studentRegister(
            student,
            dbRepositoryUser,
            authService
        );
        console.log("hhh")
        res.status(200).json({
            status: 'success',
            message: 'Successfully registered the user',
        });
    });



    //STUDENT LOGIN
    const loginStudent = asyncHandler(async (req: Request, res: Response) => {
        const { email, password }: { email: string; password: string } = req.body;
        const { accessToken } = await studentLogin(
            email,
            password,
            dbRepositoryUser,
            authService,
        ) ?? {};
        res.status(200).json({
            status: 'success',
            message: 'User logged in successfully',
            accessToken
        });
    });



    //STUDENT GOOGLE LOGIN
    const loginWithGoogle = asyncHandler(async (req: Request, res: Response) => {
        const { credential }: { credential: string } = req.body;
        const { accessToken } = await signInWithGoogleByStudent(
            credential,
            googleAuthService,
            dbRepositoryUser,
            authService,
            nodeMailerService
        );
        res.status(200).json({
            status: 'success',
            message: 'Successfully logged in with google',
            accessToken
        });
    });



    //INSTRUCTOR REGISTRATION
    const registerInstructor = asyncHandler(
        async (req: Request, res: Response) => {
            const files: Express.Multer.File[] = req.files as Express.Multer.File[];
            const instructor: InstructorInterface = req.body;
            await instructorRegister(
                instructor,
                files,
                dbRepositoryInstructor,
                authService,
                cloudService,

            );
            res.status(200).json({
                status: 'success',
                message:
                    'Your registration is pending verification by the administrators.You will receive an email once your registration is approved'
            });
        }
    );



    //INSTRUCTOR LOGIN
    const loginInstructor = asyncHandler(async (req: Request, res: Response) => {
        const { email, password }: { email: string; password: string } = req.body;
        const { accessToken, refreshToken } = await instructorLogin(
            email,
            password,
            dbRepositoryInstructor,
            dbRepositoryRefreshToken,
            authService
        );
        res.status(200).json({
            status: 'success',
            message: 'Instructor logged in successfully',
            accessToken,
            refreshToken
        });
    });



    //INSTRUCTOR GOOGLE LOGIN
    const loginWithGoogleByInstructor = asyncHandler(async (req: Request, res: Response) => {
        const { credential }: { credential: string } = req.body;
        // const { accessToken } = await signInWithGoogleByInstructor(
        //     credential,
        //     googleAuthService,
        //     dbRepositoryInstructor,
        //     authService
        // );
        // console.log(accessToken, "jjggg");
        res.status(200).json({
            status: 'success',
            message: 'Successfully logged in with google',
            // accessToken
        });
    });



    //ADMIN LOGIN
    const loginAdmin = asyncHandler(async (req: Request, res: Response) => {
        const { email, password }: { email: string; password: string } = req.body;
        const { accessToken } = await adminLogin(
            email,
            password,
            dbRepositoryAdmin,
            authService
        );
        res.status(200).json({
            status: 'success',
            message: 'Successfully logged in',
            accessToken

        });
    });



    //SEND OTP BY STUDENT
    const sendotp = asyncHandler(async (req: Request, res: Response) => {
        const { mobile }: { mobile: string } = req.body;
        console.log(mobile)
        const otpStatus: { otpStatus: string, phoneNumber: string } = await sendOTP(mobile, dbRepositoryUser, authService);
        res.status(200).json({
            status: "success",
            message: "otp has been send",
            ...otpStatus
        });
    });



    //VERIFY OTP
    const verifyOtp = asyncHandler(async (req: Request, res: Response) => {
        const { mobile, otp }: { mobile: string, otp: string } = req.body;
        console.log("mot done", mobile, otp)
        await verifyOTP(
            mobile,
            otp,
            dbRepositoryUser,
            authService
        );
        console.log("done")
        res.json({
            status: "success",
            message: "user verified",
            number: mobile,

        });
    });



    //CHANGE PASSWORD FORGOT
    const changePasswordAfterForgot = asyncHandler(async (req: Request, res: Response) => {
        const { mobile, password }: { mobile: string, password: string } = req.body
        await changePasswordAfterForgotU(
            mobile,
            password,
            dbRepositoryUser,
            authService
        );
        res.status(200).json({
            status: 'success',
            message: "Password changed successfully,Login then"
        });
    });




    return {
        registerStudent,
        loginStudent,
        registerInstructor,
        loginInstructor,
        loginAdmin,
        loginWithGoogle,
        loginWithGoogleByInstructor,
        sendotp,
        verifyOtp,
        changePasswordAfterForgot
    };


}

export default authController;