import { AdminDbInterface } from '../../../app/repositories/adminDbRepository';
import { AdminSavedDbInterface } from '../../../types/adminAuthInterface';
import AppError from '../../../utils/appError';
import HttpStatusCodes from '../../../constants/HttpStatusCodes';
import { AuthServiceInterface } from '../../../app/services/authServicesInterface';

export const adminLogin = async (
    email: string,
    password: string,
    adminRepository: ReturnType<AdminDbInterface>,
    authService: ReturnType<AuthServiceInterface>
) => {
    const admin: AdminSavedDbInterface | null =
        await adminRepository.getAdminByEmail(email);
    if (!admin) {
        throw new AppError('Admin not found..!', HttpStatusCodes.UNAUTHORIZED);
    }
    const isPasswordCorrect = await authService.comparePassword(
        password,
        admin.password
    );
    if (!isPasswordCorrect) {
        throw new AppError(
            'Sorry, your password is incorrect. Please try again',
            HttpStatusCodes.UNAUTHORIZED
        );
    }
    const payload = {
        Id: admin._id,
        email: admin.email,
        role: 'admin'
    };
    const accessToken = authService.generateToken(payload);
    return {
        accessToken,
    };
};