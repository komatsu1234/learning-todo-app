# TypeScript入門

## 基本

### 1. 型の種類
#### プリミティブ型の種類
| 種類      | 意味     | 説明                                            |
| --------- | -------- | ----------------------------------------------- |
| number    | 数値     | 整数・浮動小数点数をまとめて扱う（例：1, 3.14） |
| string    | 文字列   | `" "` `' '`  `` ` ` `` で囲まれた文字列         |
| boolean   | 真偽値   | `true` または `false`                           |
| bigint    | 超整数   | 非常に大きな整数（例：`123n`）                  |
| symbol    | シンボル | 一意の識別子を作る特殊な値                      |
| null      | null値   | 意図的に「値がない」ことを表す                  |
| undefined | 未定義   | まだ値が代入されていない状態                    |

#### オブジェクト型（プリミティブではないもの）

**array / function / class はすべて object の一種です**

| 種類     | 意味         | 説明                       |
| -------- | ------------ | -------------------------- |
| object   | オブジェクト | プロパティの場合           |
| array    | 配列         | 同じ型の集合               |
| function | 関数         | 呼び出し可能なオブジェクト |
| class    | クラス       | オブジェクトの設計図       |

#### 特殊型

| 種類    | 意味                 | 説明                                              |
| ------- | -------------------- | ------------------------------------------------- |
| any     | 何でも入る方         | 型チェックを無効化。実務では極力使わない          |
| unknown | 不明な型             | 安全なany。代入後型チェックをしないとエラーになる |
| void    | 戻り値なし           | 関数の戻り値なしの場合に使用する                  |
| never   | 絶対に値が発生しない | 例外・無限ループ                                  |


### 2. 変数の型定義
```ts
let name: string = "Taro"
let age: number = 20
let isAdmin: boolean = false
```

### 3. 型推論

TypeScriptが自動で`nameはstring`と判断してくれます。

```ts
let name = "Taro"
```
実務では**基本は型推論に任せるのがセオリー**

### 4. 関数

#### 基本的な書き方

```ts
function 関数名(引数名: 引数の型): 戻り値の型 {
  return 戻り値
}
```
#### 通常の関数

```ts
function greet(name: string): string {
  return "Hello " + name
}
```
#### アロー関数
```ts
const greet = (name: string): string => {
  return "Hello " + name
}
```
- 今のWeb開発ではこっちがよく使われる。

#### 実務でのセオリー
| 場所          | 戻り値型 |
| ------------- | -------- |
| 小さい関数    | 推論     |
| export関数    | 明示     |
| API / service | 明示     |

### 5. オブジェクト型
- 型に名前を付ける場合に利用する
- オブジェクト型は空で始めたり後から入れることが多いため型推論より型を定義することが多い

#### type
```ts
type User = {
  name: string
  age: number
}

const user: User = {
  name: "Taro",
  age: 20
}
```
2026年現在typeが主流

#### interface
```ts
interface User {
  name: string
  age: number
}
```
ライブラリの拡張、java的クラス設計時に`interface`が利用される

### 6. 配列
```ts
let numbers: number[] = [1, 2, 3]

let users: user[] = [
  { name: "Taro", age: 20 },
  { name: "Jiro", age: 25 }
]
```

### 7. オプショナル（?）
```ts
type User = {
  name: string
  age?: number
}
```
`age?`はあってもなくてもよい値

### 8. Union型（よく使う）
```ts
let id: string | number
```
→ string か number どちらか

## 応用
### 1. 型は「ドメイン単位」で作る
```src
users
  user.type.ts

stores
  store.type.ts

notice
  notice.type.ts
```

#### 例
```
users/user.types.ts
```
```ts
export type User = {
  id: string
  name: string
  email: string
}
```

### 2. DTO / Entity を分ける

#### Entity

**DBのデータ構造**

```ts
export type UserEntity = {
  id: string
  name: string
  email: string
  password_hash: string
  created_at: Date
}
```


#### DTO

**APIでやり取りする型**
