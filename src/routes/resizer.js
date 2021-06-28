/* eslint-disable new-cap */
import {Router} from 'express';
import {resizeImage} from '../controllers/imageResizer.js';
import {auth} from '../middlewares/auth.js';

const router = Router();

/**
 * Request: POST
 * Route: /resize
 */
router.post('/resize', auth, resizeImage);

export default router;