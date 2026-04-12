# DB 設計書

## テーブル定義
### タスクテーブル（task）

| 物理名      | 論理名   | データ型 | 桁数・精度 | 制約             | デフォルト値 | 説明                   |
| ----------- | -------- | -------- | ---------- | ---------------- | ------------ | ---------------------- |
| id          | ID       | Int      |            | PK autoIncrement | -            | タスクのID（主キー）   |
| title       | タイトル | String   | max 200    | NotNull          | -            | タスクのタイトル       |
| description | 説明     | String   | max 500    | Nullable         |              | タスクの説明           |
| completed   | 完了状態 | Boolean  |            | NotNull          | false        | タスク完了したかどうか |
| createdAt   | 作成日時 | Datetime |            | NotNull          | now()        | 作成した日時           |
| updatedAt   | 更新日時 | Datetime |            | NotNull          |              | 更新時に自動更新       |
