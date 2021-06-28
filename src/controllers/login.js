import {schema} from '../middlewares/loginValidator.js';
import {tokenGen} from '../helpers/tokenGen.js';

export const login = async (req, res) => {

    const result = schema.validate(req.body);
    if (result.error) {

        res.status(400).send(result.error.details[0].message);

    } else {

        let {userName} = req.body;
        const id = Math.random() * 10;
        userName = userName.toLowerCase();
        const token = await tokenGen({id,
            userName});
        res.status(200).json({'status': 'ok',
            token});

    }

};