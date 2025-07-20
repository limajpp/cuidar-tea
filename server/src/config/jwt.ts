import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const JWT_SECRET = process.env.JWT_SECRET || 'segredo';
export const JWT_EXPIRES = '40d'; 

export const generateToken = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};