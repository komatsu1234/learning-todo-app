# 詳細設計

## フォルダ構成
```text
src/
  ├── controllers/ (リクエストの入り口)
  ├── services/    (ビジネスロジック：一番大事なところ)
  ├── repositories/ (DB 操作：Prisma を使う)
  ├── schemas/      (Zod スキーマ：API 契約)
  └── index.ts      (エントリポイント)
```

## バリデーション
### CreateTodoSchema
- title: string (min: 1, max: 200)
- description: string (optional, max: 500)