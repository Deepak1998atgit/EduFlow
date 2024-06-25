import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import configKeys from '../../../config';
import Twilio from '../../utils/twilio';


const twilio = new Twilio(
  configKeys.TWILIO_ACCOUNT_SID,
  configKeys.TWILIO_AUTH_TOKEN,
  configKeys.TWILIO_SERVICE_SID
);

export const authService = () => {


  const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  };


  const comparePassword = (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword);
  };


  const generateToken = (payload: JwtPayload) => {
    const token = jwt.sign({ payload }, configKeys.JWT_SECRET, {
      expiresIn: '3h'
    });
    return token;
  };


  const generateRandomPassword=()=>{
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    const passwordLength=8;
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    return password;
  }


  const generateOTP = async (phoneNumber: string) => {
    console.log(phoneNumber,"uu")
    const otpStatus = await twilio
      .sendVerificationCode(phoneNumber)
      .then((verfication: any) => verfication?.status)
      .catch((error: Error) => console.log(error))
    return {otpStatus, phoneNumber};
  };


  const verifyOTP = async (phoneNumber: string, otp: string) => {
    const verfication = await twilio
      .verifyCode(phoneNumber, otp)
      .then((verificationCheck: any) => {
        return verificationCheck?.status   
      })
      .catch((error: Error) => console.log(error));
    return verfication
  };


  const generateRefreshToken = (payload: JwtPayload) => {
    const token = jwt.sign({ payload }, configKeys.JWT_REFRESH_SECRET, {
      expiresIn: '7d'
    });
    return token;
  };

  

  const decodeToken = (token:string)=>{
    const decodedToken: jwt.JwtPayload | null = jwt.decode(token) as jwt.JwtPayload | null;
    return decodedToken
  }


  const decodedTokenAndReturnExpireDate = (token: string): number => {
    const decodedToken: any = jwt.decode(token);
    let expirationTimestamp: number;
    if (decodedToken && decodedToken.exp) {
      expirationTimestamp = decodedToken.exp * 1000;
    } else {
      expirationTimestamp = 0;
    }
    return expirationTimestamp;
  };


  return {
    hashPassword,
    comparePassword,
    generateToken,
    generateRandomPassword,
    generateOTP,
    verifyOTP,
    generateRefreshToken,
    decodeToken,
    decodedTokenAndReturnExpireDate
  };
};

export type AuthService = typeof authService;

export type AuthServiceReturn = ReturnType<AuthService>;