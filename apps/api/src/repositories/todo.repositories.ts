/**
 * リポジトリ層
 * データベース操作を実装する
 */
import { PrismaClient, ToDo } from `@prisma/client`;

const prisma = new PrismaClient();

// タスク一覧取得
export const findMany = async () => {
  return await prisma.todo.findMany();
};

// タスク一件取得
export const findById = async (id: number) => {
  return await prisma.todo.findUnique({ where: { id } });
};

// タスク作成
export const create = async (data: { title: string, description?: string }) => {
  return await prisma.todo.create({ data });
};

// タスク更新
export const update = async (id: number) => {
  return await prisma.todo.update({
    where: 
  });
};