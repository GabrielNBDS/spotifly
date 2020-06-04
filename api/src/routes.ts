import express from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import SongsController from './controllers/SongsController';

const routes = express.Router();
const upload = multer(uploadConfig);
const songsController = new SongsController();

routes.post('/songs', upload.single('song'), songsController.create);
routes.get('/songs/:id', songsController.show);
routes.get('/songs', songsController.index);

export default routes;
