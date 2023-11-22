import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import configKeys from '../../../config';


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


  return {
    hashPassword,
    comparePassword,
    generateToken
  };
};

export type AuthService = typeof authService;

export type AuthServiceReturn = ReturnType<AuthService>;