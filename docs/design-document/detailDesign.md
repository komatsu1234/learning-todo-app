# 詳細設計

## フォルダ構成
```text
src/
  ├── controllers/ (リクエストの入り口)
  ├── services/    (ビジネスロジック：一番大事なところ)
  ├── repositories/ (DB 操作：Prisma を使う)
  ├── routes/ エンドポイント（URL）と controllers を紐付けるルーティング定義。
  ├── middlewares/ 認証（Auth）やログ出力など、共通の処理。
  ├── types/ TypeScriptの型定義（Prismaが生成する型以外の、独自の型）。
  ├── schemas/      (Zod スキーマ：API 契約)
  └── index.ts      (エントリポイント)
```

## バリデーション
### CreateTodoSchema
- title: string (min: 1, max: 200)
- description: string (optional, max: 500)