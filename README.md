# README

サービス名
工事 schedule（仮）
リンク（予定）

### サービス内容

工事予定管理用アプリ

- **機能要件**
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
- **非機能要件**
  - 一定の日数の経過後、データベースの予定データの削除

# データベース設計

![データベース設計](/Users/nagaishoshigotoyou/Programing/projects/kyowasetsubi/schedule_app/database_design.png)

## groups テーブル

| Column              | Type   | Options     |
| ------------------- | ------ | ----------- |
| group_name          | string | null: false |
| representative_name | string | null: false |
| name_kana           | string |             |
| position            | string |             |
| encrypted_password  | string | null: false |
| mail                | string | null: false |
| phone_number        | string | null: false |
| postal_code         | string |             |
| address             | string |             |

### Association

- has_many :works
- has_many :deliveries
- has_many :events
- has_many :trucks
- has_many :workers

## works テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| datetime | date       |                                |
| site_id  | references | null: false, foreign_key: true |

### Association

- belongs_to :group
- has_many :sites, through :work_sites

## work_sites テーブル

| Column  | Type       | Options                        |
| ------- | ---------- | ------------------------------ |
| work_id | references | null: false, foreign_key: true |
| site_id | references | null: false, foreign_key: true |

### Association

- belongs_to :work
- belongs_to :site

## deliveries テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| datetime | date       |                                |
| site_id  | references | null: false, foreign_key: true |

### Association

- belongs_to :group
- has_many :sites, through :delivery_sites

## delivery_sites テーブル

| Column      | Type       | Options                        |
| ----------- | ---------- | ------------------------------ |
| delivery_id | references | null: false, foreign_key: true |
| site_id     | references | null: false, foreign_key: true |

### Association

- belongs_to :delivery
- belongs_to :site

## events テーブル

| Column    | Type       | Options                        |
| --------- | ---------- | ------------------------------ |
| content   | text       | null: false                    |
| datetime  | date       |                                |
| worker_id | references | null: false, foreign_key: true |

### Association

- belongs_to :group
- has_many :workers, through :event_workers

## event_workers テーブル

| Column    | Type       | Options                        |
| --------- | ---------- | ------------------------------ |
| event_id  | references | null: false, foreign_key: true |
| worker_id | references | null: false, foreign_key: true |

### Association

- belongs_to :event
- belongs_to :worker

## sites テーブル

| Column      | Type       | Options           |
| ----------- | ---------- | ----------------- |
| name        | string     | null: false       |
| postal_code | string     |                   |
| address     | string     |                   |
| worker_id   | references | foreign_key: true |
| truck_id    | references | foreign_key: true |

### Association

- has_many :works, through :work_sites
- has_many :deliveries, through :delivery_sites
- has_many :trucks, through :site_trucks
- has_many :workers, through :site_workers

## site_trucks テーブル

| Column   | Type       | Options                        |
| -------- | ---------- | ------------------------------ |
| site_id  | references | null: false, foreign_key: true |
| truck_id | references | null: false, foreign_key: true |

### Association

- belongs_to :site
- belongs_to :truck

## site_workers テーブル

| Column    | Type       | Options                        |
| --------- | ---------- | ------------------------------ |
| site_id   | references | null: false, foreign_key: true |
| worker_id | references | null: false, foreign_key: true |

### Association

- belongs_to :site
- belongs_to :worker

## trucks テーブル

| Column  | Type    | Options     |
| ------- | ------- | ----------- |
| type    | string  | null: false |
| number  | integer |             |
| address | string  |             |

### Association

- belongs_to :group
- has_many :sites, through :site_trucks

## workers テーブル

| Column       | Type    | Options     |
| ------------ | ------- | ----------- |
| name         | string  | null: false |
| name_kana    | string  |             |
| age          | integer |             |
| phone_number | string  |             |

### Association

- belongs_to :group
- has_many :sites, through :site_workers
- has_many :events, through :event_workers
