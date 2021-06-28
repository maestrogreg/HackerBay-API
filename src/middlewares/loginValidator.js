/* eslint-disable require-unicode-regexp */
/* eslint-disable prefer-regex-literals */
import Joi from 'joi';

export const schema = Joi.object({
    'password': Joi.string().
        pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).
        required().
        error(() => new Error('check password field')),
    'userName': Joi.string().required().
        min(5)
});