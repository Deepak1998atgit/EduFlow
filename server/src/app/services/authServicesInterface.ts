import { AuthServiceReturn } from '../../frameworks/services/authService';
import { JwtPayload } from '../../types/common';

export const authServiceInterface = (service: AuthServiceReturn) => {


  const hashPassword = (password: string) => service.hashPassword(password);


  const comparePassword = (password: string, hashedPassword: string) => service.comparePassword(password, hashedPassword);


  const generateToken = (payload: JwtPayload) => service.generateToken(payload);

  return {
    hashPassword,
    comparePassword,
    generateToken
  };
};

export type AuthServiceInterface = typeof authServiceInterface;