import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
// Sign the token
const jwtSecret = process.env.JWT_SECRET;
const getJwtToken = (payload) => {
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
    console.log('Generated JWT:', token);
    return token;
}

export default getJwtToken;