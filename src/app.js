/* eslint-disable no-console */
/* eslint-disable no-undef */
import express from 'express';
import loginRoutes from './routes/login.js';
import patchRoutes from './routes/patch.js';
import resizer from './routes/resizer.js';
import debug from 'debug';
import dotenv from 'dotenv';
dotenv.config();
const log = debug('http:server');

const app = express();
app.use(express.json());
log('hello');
app.use('/', loginRoutes);
app.use('/', patchRoutes);
app.use('/', resizer);

const PORT = process.env.PORT || 3005;


const server = app.listen(PORT, () => {

    console.log(`server running on ${PORT}`);

});

export default server;