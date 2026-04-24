import { z } from "zod";

/**
 * タスク作成
 * trim(): 空白文字を防ぐ
 * optional(): Null許容
 * */
export const createTodoSchema = z.object({
  title: z.string().trim().min(1, "タイトルは必須です").max(100, "100文字以内で入力してください"),
  description: z.string().max(500, "500文字で入力してください。").optional(),
});

// 型として定義 "typeof" で値を型に変換
export type CreateTodoInput = z.infer<typeof createTodoSchema>;

/**
 * ID（パスパラメータ）のバリデーション
 * coerce: 文字列を数値に変換
 * int(): 整数かどうか(小数点以下 "NG" )
 * positive(): 正の数かどうか "0" を含む場合 "nonnegative()" を利用する
 *  */
export const idSchema = z.object({
  params: z.object({
    id: z.coerce.number().int().positive(),
  })
});

// 型として定義
export type idInput = z.infer<typeof idSchema>;

/**
 * タスク更新
 * trim(): 空白を除去
 */
export const updateTodoSchema = z.object({
  title: z.string().trim().min(1).optional(),
  description: z.string().optional(),
  completed: z.boolean().optional(),
}).refine(v => Object.keys(v).length > 0, {message: '更新項目が必要です'});

// 型として定義
export type updateTodoInput = z.infer<typeof updateTodoSchema>;

