/**
 * サービス層
 * ビジネスロジックを実装する
 */

// `* as name` にするとexport defaut にしていない個別の関数を1つの名前で呼び出せる
import * as todoRepository from "../repositories/todo.repositories";

// タスク一覧取得
export const getAllTodos = async () => {
  return await todoRepository.findMany();
}

// タスク作成
export const createTodo = async (title: string, description?: string) => {
  return await todoRepository.create({ title, description });
}