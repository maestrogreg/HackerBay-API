import jsonPatch from 'jsonpatch';
import bodyValidator from '../middlewares/bodyValidator.js';


export const patcher = (req, res) => {

    try {

        const output = bodyValidator.validate(req.body);
        if (output.error) {

            res.status(400).send(output.error.details[0].message);

        } else {

            const {document} = req.body;
            const {thePatch} = req.body;
            const result = jsonPatch.apply_patch(document, thePatch);
            res.status(200).json({'data': result,
                'status': 'ok'});

        }

    } catch (err) {

        res.status(400).json({'message': err.message,
            'status': 'error'});

    }

};