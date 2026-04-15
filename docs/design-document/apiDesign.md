# API 設計書

## エラー方針

| エラーコード | いつ                                     | 返すボディ例                                      |
| ------------ | ---------------------------------------- | ------------------------------------------------- |
| 400          | リクエストのJSONが壊れている/Zodで弾いた | `{ error: {"message":"不正なリクエストです"} }`   |
| 404          | `:id` のタスクがDBにない                 | `{ error: {"message":"タスクが見つかりません"} }` |
| 500          | 想定外のサーバー障害                     | `{ error: {"message":"サーバーエラーです"} }`     |

## リソースURL
| リソース   | メソッド | エンドポイント | 機能概要               |
| ---------- | -------- | -------------- | ---------------------- |
| タスク一覧 | GET      | `/todos`       | 全てのタスクを取得する |
| タスク作成 | POST     | `/todos`       | 新しいタスクを作成     |
| タスク完了 | PATCH    | `/todos/:id`   | タスクを完了状態にする |
| タスク削除 | DELETE   | `/todos/:id`   | タスクを削除する       |


## リクエスト＆レスポンス

### タスク作成
- メソッド: POST
- エンドポイント: `/todos`
#### リクエストフィールド表
| フィールド名 | 型     | 必須 | 備考                       |
| ------------ | ------ | ---- | -------------------------- |
| title        | string | 必須 | 1～200文字（DBとそろえる） |
| description  | string | 任意 | 省略可。文字数制限あり？   |

#### リクエスト例
```json
{
    title: "買い物に行く"
    description: "牛乳と卵"
}
```

#### レスポンスフィールド表示
- 成功時ステータスは 200

| フィールド名 | 型            | 備考                      |
| ------------ | ------------- | ------------------------- |
| id           | number        | DBの主キー                |
| title        | string        |                           |
| description  | string / null |                           |
| completed    | boolean       | 作成後は通常 `false`      |
| createdAt    | string        | ISO 8601 形式の日時文字列 |
| updatedAt    | string        | 同上                      |

#### レスポンス例

```json
{
    "id": 1,
    "title": "買い物に行く",
    "description": "牛乳と卵",
    "completed": false,
    "createdAt": "2026-04-12T10:00:00.000z",
    "updatedAt": "2026-04-12T10:00:00.000z"
}
```

### タスク一覧
- メソッド: GET
- エンドポイント: `/todos`
#### リクエスト
```json
なし
```
#### レスポンスフィールド表
| フィールド名 | 型            | 備考                      |
| ------------ | ------------- | ------------------------- |
| id           | number        | DBの主キー                |
| title        | string        |                           |
| description  | string / null |                           |
| completed    | boolean       |                           |
| createdAt    | string        | ISO 8601 形式の日時文字列 |
| updatedAt    | string        | 同上                      |

#### レスポンス例
- 成功時ステータスは 200
```json
[
  {
      "id": 1,
      "title": "買い物に行く",
      "description": "牛乳と卵",
      "completed": false,
      "createdAt": "2026-04-12T10:00:00.000z",
      "updatedAt": "2026-04-12T10:00:00.000z"
  }
]
```

### タスク更新
- メソッド: PATCH
- エンドポイント: `/todos/:id`
#### リクエストフィールド表
| フィールド名 | 型      | 必須 | 備考        |
| ------------ | ------- | ---- | ----------- |
| title        | string  | 任意 | 上限200文字 |
| description  | string  | 任意 | 上限200文字 |
| completed    | boolean | 任意 |             |
#### リクエスト例
```json
{
    "title": "買い物に行く",
    "description": "牛乳と卵",
    "completed": false,
}
```

#### レスポンスフィールド表示
- 成功時ステータスは 200 
| フィールド名 | 型            | 備考                      |
| ------------ | ------------- | ------------------------- |
| id           | number        | DBの主キー                |
| title        | string        |                           |
| description  | string / null |                           |
| completed    | boolean       | 作成後は通常 `false`      |
| createdAt    | string        | ISO 8601 形式の日時文字列 |
| updatedAt    | string        | 同上                      |

#### レスポンス例
```json
{
    "id": 1,
    "title": "買い物に行く",
    "description": "牛乳と卵",
    "completed": false,
    "createdAt": "2026-04-12T10:00:00.000z",
    "updatedAt": "2026-04-12T10:00:00.000z"
}
```

### タスク削除
- メソッド: DELETE
- エンドポイント: `/todos/:id`
#### リクエスト
```json
なし
```

#### レスポンス
- 204 No Content。レスポンスボディなし