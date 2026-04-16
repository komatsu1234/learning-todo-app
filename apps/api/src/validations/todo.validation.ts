import { z } from `zod`;

// タスク作成
export const createTodoSchema = z.object({
  title: z.string().min(1, "タイトルは必須です").max(100, "100文字以内で入力してください。"),
  description: z.string().max(500, "500文字以内で入力してください。"),
});


// ID（パスパラメータ）のバリデーション
export const todoIdSchema = z.object({
  prams: z.object({
    id: z.numger(),
  }),
});


// 型をエクスポートし再利用できる
export type CreateTodoInput = z.infer<typeof createTodoSchema>['body'];