/**
 * ルート層
 * リクエストをコントローラーに転送する
 */

import { Router } from 'express';
import * as todoController from '../controllers/todo.controller';
import { validate } from '../middlewares/todo.validate';
import { createTodoSchema, idSchema, updateTodoSchema } from '../validations/todo.validation';

const router = Router();

router.get('/', todoController.getAll);
router.get('/:id', validate(idSchema), todoController.getOne);
router.post('/', validate(createTodoSchema), todoController.create);
router.put('/:id', validate(updateTodoSchema), todoController.update);
router.delete('/:id', todoController.remove);

export default router;