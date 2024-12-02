import { AuthServiceReturn } from '../../frameworks/services/authService';
import { JwtPayload } from '../../types/common';

export const authServiceInterface = (service: AuthServiceReturn) => {


  const hashPassword = (password: string) => service.hashPassword(password);


  const comparePassword = (password: string, hashedPassword: string) => service.comparePassword(password, hashedPassword);


  const generateRandomPassword=() => service.generateRandomPassword();


  const generateToken = (payload: JwtPayload) => service.generateToken(payload);


  const generateOTP = (phoneNumber: string) => service.generateOTP(phoneNumber);


  const verifyOTP = (phoneNumber: string, otp: string) => service.verifyOTP(phoneNumber, otp);
  

  const generateRefreshToken = (payload: JwtPayload) => service.generateRefreshToken(payload);
  

  const decodedTokenAndReturnExpireDate = (token: string) => service.decodedTokenAndReturnExpireDate(token);


  const decodeToken = (token:string)=> service.decodeToken(token)

  return {
    hashPassword,
    comparePassword,
    generateToken,
    generateRandomPassword,
    generateOTP,
    verifyOTP,
    generateRefreshToken,
    decodedTokenAndReturnExpireDate,
    decodeToken
  };
};

export type AuthServiceInterface = typeof authServiceInterface;