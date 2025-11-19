import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET;
// Sign the token
export default function getRefreshToken(payload) {
    const token = jwt.sign(payload, jwtRefreshSecret, { expiresIn: '30d' });
    console.log('Generated JWT:', token);
    return token;
}