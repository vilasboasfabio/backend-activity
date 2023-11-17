import {Router} from 'express';
import {createCloth, getClothById, getCloths, updateCloth, deleteCloth} from '../controller/clothing.controller.js';

const clouthsRouter = Router();

clouthsRouter.get('/', getCloths);
clouthsRouter.post('/', createCloth);
clouthsRouter.put('/:id', updateCloth);
clouthsRouter.delete('/:id', deleteCloth);
clouthsRouter.get('/:id', getClothById);

export default clouthsRouter;
