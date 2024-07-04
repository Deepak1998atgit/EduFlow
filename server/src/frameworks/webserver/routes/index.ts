import { Application } from 'express';
import authRouter from './auth';
import adminRouter from '../../../../src-admin/router/adminRouter';
import studentRouter from './student';
import categoryRouter from './category';
import courseRouter from './course';
import instructorRouter from './instructor';
import { RedisClient } from '../../../../server';

const routes = (app: Application , redisClient: RedisClient) => {
    app.use('/api/auth', authRouter());
    app.use('/api/admin', adminRouter());
    app.use('/api/students', studentRouter());
    app.use('/api/category', categoryRouter());
    app.use('/api/courses', courseRouter(redisClient));
    app.use('/api/instructors', instructorRouter());
}
export default routes;