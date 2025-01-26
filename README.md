# README

サービス名
工事 schedule（仮）
リンク（予定）

### サービス内容

- 工事予定管理用アプリ
  要件
  - 搬入予定を選択、表示できる
    - 搬入先をプルダウン（又はドラッグ＆ドロップ）で選択できる
    - トラックの車種をプルダウン（又はドラッグ＆ドロップ）で選択できる
  - 現場予定を選択、表示できる
    - 各現場で誰が参画するかをプルダウン（又はドラッグ＆ドロップ）で選択できる
  - イベントを入力、表示できる
    - イベントは自由記入できる
  - プルダウン（又はドラッグ＆ドロップ）する要素を事前に作成できる
  - 週間、月間を切り替えて表示できる
  - スマホでの使用及び閲覧ができる
  - ユーザーを切り替えられる

# データベース設計

## groups テーブル

| Column | Type | Options |
| group_name | string | null: false |
| representative_name | string | null: false |
| name_kana | string | |
| position | string | |
| encrypted_password | string | null: false |
| mail | string | null: false |
| phone_number | string | null: false |
| postal_code | string | |
| address | string | |
