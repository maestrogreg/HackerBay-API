import Joi from 'joi';

const tests = Joi.object({
    'op': Joi.string().required(),
    'path': Joi.string().required(),
    'value': Joi.string()
});

const schema = Joi.object({
    'document': Joi.object({
        'name': Joi.string().required(),
        'sport': Joi.string().required()
    }).required(),
    'thePatch': Joi.array().items(tests).
        required()
});

export default schema;