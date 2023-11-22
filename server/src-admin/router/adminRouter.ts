import express, { Request, Response } from 'express';
import { getUsers,blockUser,unBlockUser,getTutors,blockTutor,unBlockTutor} from '../controller/adminController';

const adminRouter = () => {
    const router = express.Router();
    router.get('/getUsers', getUsers);
    router.post('/blockUser',blockUser);
    router.post('/unBlockUser',unBlockUser);
    router.get('/getTutors',getTutors);
    router.post('/blockTutor',blockTutor);
    router.post('/unBlockTutor',unBlockTutor);
    return router;
}

export default adminRouter;