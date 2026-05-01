/**
 * コントローラー層
 * リクエストを受け取り、レスポンスを返す
*/
import { Request, Response } from 'express'
import * as todoService from '../services/todo.service';
import { createTodoSchema, idSchema, updateTodoSchema } from '../validations/todo.validation';


const zod = {  }

// タスク一覧取得
export const getAll = async (_req: Request, res: Response) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// タスク一件取得
export const getOne = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const todo = await todoService.getTodoById(id);
    res.json(todo);
  } catch (error: any) {
    res.status(404).json({ error: error.message }); // IDが見つからない場合の 404 エラー
  }
};

// タスク作成
export const create = async (req: Request, res: Response) => {
  try {
    const parsed = createTodoSchema.safeParse(req.body);
    if(!parsed.success){
      return 
    }
    const { title, description } = req.body;
    const newTodo = await todoService.createTodo(title, description);
    res.status(201).json(newTodo);
  } catch (error: any) {
    res.status(400).json({ error: error.message }); // 400 バリデーションエラー
  }
};

// タスク更新
export const update = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const updatedTodo = await todoService.updateTodo(id, req.body);
    res.json(updatedTodo);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// タスク削除
export const remove = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const deletedTodo = await todoService.deleteTodo(id);
    res.status(204).send(); // No Content
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
};