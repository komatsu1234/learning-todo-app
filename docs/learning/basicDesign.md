# TodoApp基本設計書

## システム概要
ToDoタスクを管理するシンプルなAPI。  
ユーザーはタスクを作成し、一覧を確認し、完了状態に更新できる。

## 1. 機能
### タスク作成
新しいタスクを作成するs

### タスク一覧表示
作成済みのタスクを一覧表示する

### タスク完了
タスクを完了状態にする

## 2. API

### 2.1 タスク作成

#### エンドポイント

| リソース   | メソッド | エンドポイント | 機能概要           |
| ---------- | -------- | -------------- | ------------------ |
| タスク作成 | POST     | /tasks         | 新しいタスクを作成 |

#### request

```json
{
  title: string
  description: string
}
```

#### response

```json
{
  id
  title
  description
  completed
}
```


### 2.2 タスク一覧

| リソース       | メソッド | エンドポイント | 機能概要                 |
| -------------- | -------- | -------------- | ------------------------ |
| タスク一覧取得 | GET      | /tasks         | すべてのタスクを取得する |

#### request

```json
{
  title: string
  description: string
}
```

#### response

```json
なし
```

### 2.3 タスク完了

| リソース   | メソッド | エンドポイント | 機能概要               |
| ---------- | -------- | -------------- | ---------------------- |
| タスク完了 | PATCH    | /tasks/:id     | タスクを完了状態にする |

#### request

```json
{
  completed: boolean
}
```

#### response

```json
[
  {
    id
    title
    description
    completed
  },
  {task},
  {task}
]
```

## 3. DB設計

### 3.1 task（タスク）

#### テーブル定義

| カラム名    | データ型 | 制約             | 説明               |
| ----------- | -------- | ---------------- | ------------------ |
| id          | int      | PK autoIncrement | タスクID（主キー） |
| title       | String   | NotNull          | タイトル           |
| description | String   | Nullable         | 説明               |
| completed   | Boolean  | Default false    | 完了状態           |
| createdAt   | DateTime | Default:now()    | 作成日時           |

#### prisma.schema

```prisma
model Task {
  id          Int      @id @default(autoincrement())
  title       String
  description String?
  completed   Boolean  @default(false)
  createdAt   DateTime @default(now())
}
```

## 4. DTO設計
DTO = API用の型

### CreateTaskDto（タスク作成）
```ts
type CreateTaskDto = {
  title: string
  description?: string
}

```

### UpdateTaskDto（タスク完了）
```ts
type UpdateTaskDto = {
  completed: boolean
}
```
### TaskResponseDto（タスク作成・完了レスポンス）
```ts
type TaskResponseDto = {
  id: number
  title: string
  description?: string
  completed: boolean
  createdAt: Date
}
```

## 5. Zod Validation設計

zod → DTO → API

```ts
const createTaskSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional()
})
```

## 6. フォルダ構成
モノレポ構成
```modules
learning-todo-app
  backend
    src
      controller
    prisma
    package.json
  frontend
    src
    package.json
  .github
    workflows
      ci.yml
  README.md
```

## 7. 処理フロー

### 7.1 タスク作成
```
1. request受信
2. Zodでバリデーション
3. service呼び出し
4. PrismaでDB保存
5. response返却
```