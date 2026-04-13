/**
 * コントローラー層
 * リクエストを受け取り、レスポンスを返す
*/
import { Request, Response } from 'express'
import * as todoService from '../services/todo.service';

// タスク一覧取得
export const getAll = await (req: Request, res: Response) => {
  try {
    const todos = async todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json(error: 'Internal Server Error');
  }
};

// タスク一件取得
export getOne = (req, res) => { };
// タスク作成
export create = (req, res) => { };
// タスク更新
export update = (req, res) => { };
// タスク削除
export remove = (req, res) => { };