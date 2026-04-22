/**
 * ルート層
 * リクエストをコントローラーに転送する
 */

import { Router } from 'express';
import * as todoController from '../controllers/todo.controller';
import { validate } from '../middlewares/todo.validate';
import { CreateTodoInput, idInput, updateTodoInput } from '../validations/todo.validation';

const router = Router();

router.get('/', todoController.getAll);
router.get('/:id', validate(idInput), todoController.getOne);
router.post('/', validate(CreateTodoInput), todoController.create);
router.put('/:id', validate(updateTodoInput), todoController.update);
router.delete('/:id', todoController.remove);

export default router;