import { Application } from 'express';
import authRouter from './auth';
import adminRouter from '../../../../src-admin/router/adminRouter';
import studentRouter from './student';

const routes = (app: Application) => {
    app.use('/api/auth', authRouter());
    app.use('/api/admin', adminRouter());
    app.use('/api/students', studentRouter());

}
export default routes;