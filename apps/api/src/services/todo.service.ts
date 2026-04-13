/**
 * サービス層
 * ビジネスロジックを実装する
 */

// `* as name` にするとexport defaut にしていない個別の関数を1つの名前で呼び出せる
import * as todoRepository from "../repositories/todo.repositories";

// タスク一覧取得
export const getAllTodos = async () => {
  return await todoRepository.findMany();
};

// タスク一件取得
export const getTodoById = async (id: number) => {
  const todo = await todoRepository.findById(id);
  if (!todo) throw new Error(`Todo not found`)
  return todo;
};

// タスク作成
export const createTodo = async (title: string, description?: string) => {
  if (!title) throw new Error('Title is required')
  return await todoRepository.create({ title, description });
};

// タスク更新
export const updateTodo = async (id: number, data: {title: string, description: string, completed: boolean}) => {
  // 更新前に存在をチェック
  await getTodoById(id);
  return await todoRepository.update;
};

// タスク削除
export const deleteTodo = async (id: number) => {
  // 削除前に存在チェック
  await getTodoById(id);
  return await todoRepository.deleteById(id);
};