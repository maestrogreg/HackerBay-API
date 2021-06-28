/* eslint-disable new-cap */
import express from 'express';
import {login} from '../controllers/login.js';

/**
 * Request: POST
 * url: /login
 */
const router = express.Router();
router.post('/login', login);


export default router;