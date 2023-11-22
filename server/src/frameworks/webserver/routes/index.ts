import { Application } from 'express';
import authRouter from './auth';
import adminRouter from '../../../../src-admin/router/adminRouter';
console.log("authrouter")
const routes = (app: Application) => {
    app.use('/api/auth', authRouter());
    app.use('/api/admin',adminRouter());
}
export default routes;