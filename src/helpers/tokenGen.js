/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';

export const tokenGen = (data) => {

    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(data, secret);
    return token;

};