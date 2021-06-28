/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';


export const auth = (req, res, next) => {

    if (!req.headers.authorization) {

        res.status(400).json({'message': 'Please ensure you are logged in!',
            'status': 'error'});

    }

    // eslint-disable-next-line max-len
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {

            const incoming = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(incoming, process.env.JWT_SECRET);
            req.user = decoded.username;
            next();

        } catch (error) {

            res.status(401).json({'message': 'Not Authorised, invalid token',
                'status': 'error'});

        }

    }

};