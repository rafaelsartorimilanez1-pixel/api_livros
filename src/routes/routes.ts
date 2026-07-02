import {Router} from 'express'
import * as BookController from '../controllers/controller';

const router = Router();

router.get("/book/", BookController.getBookController)
router.get("/book/:id", BookController.getBookByIdController)

export default router