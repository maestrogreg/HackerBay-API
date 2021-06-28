/* eslint-disable new-cap */
import {Router} from 'express';
import {patcher} from '../controllers/patcher.js';
import {auth} from '../middlewares/auth.js';

const router = Router();

/**
 * Request: PUT
 * Route: /patch
 */
router.put('/patch', auth, patcher);

export default router;