import { Application } from 'express';
import authRouter from './auth';
import studentRouter from './student';
import categoryRouter from './category';
import courseRouter from './course';
import instructorRouter from './instructor';
import refreshRouter from './refresh';
import { RedisClient } from '../../../../server';
import paymentRouter from './payment';
import jwtAuthMiddleware from '../middlewares/userAuth';

const routes = (app: Application, redisClient: RedisClient) => {
    app.use('/api/all/refresh-token', refreshRouter());
    app.use('/api/auth', authRouter());
    app.use('/api/students', studentRouter(redisClient));
    app.use('/api/category', categoryRouter());
    app.use('/api/courses', courseRouter(redisClient));
    app.use('/api/instructors', instructorRouter());
    app.use('/api/payments', jwtAuthMiddleware, paymentRouter())
}
export default routes;