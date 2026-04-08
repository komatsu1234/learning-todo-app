# DB 設計書

## テーブル定義
### タスクテーブル（task）

| 物理名      | 論理名   | データ型 | 桁数・精度      | 制約             | デフォルト値 | 説明                   |
| ----------- | -------- | -------- | --------------- | ---------------- | ------------ | ---------------------- |
| id          | ID       | Int      |                 | PK autoIncrement |   -           | タスクのID（主キー）   |
| title       | タイトル | String   | min 1 / max 200 | NotNull          |    -          | タスクのタイトル       |
| description | 説明     | String   |                 | Nullable         |              | タスクの説明           |
| completed   | 完了状態 | Boolean  |                 |                  | false        | タスク完了したかどうか |
| created     | 作成日時 | Datetime |                 |                  | now()        | 作成した日時           |
| updated     | 更新日時 | Datetime |                 |                  |              | 更新した日時           |
