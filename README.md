# WanderVive

## 概要

現在地周辺で、演奏しているバンドが分かるWebアプリ

## 開発背景

- チームメンバーにいるバンドマンが、知り合いや友達以外の人に対しての、集客に困っている
  - 実際、コロナ化以降の音楽市場動向の低下している
- お客さん側にも、ライブハウスに行くハードルが高い
  - 日が合わない
  - 場所が遠い
  - 知りたいタイミングを逃す

これらを解消し、音楽をより身近な経験にしたい

## 機能

- 現在地からの周囲の半径(m)と日付を選択
- その条件に合致するバンド情報を表示
- バンド情報を選択すると、以下が表示
  - バンド情報(名前、ジャンル、写真、SNS)
  - イベント情報(名前、開演・開場時間、料金)
  - ライブハウス情報(名前、HP、Google Map)
  - イベントに出演する他のバンド一覧

## 使用技術

- フロントエンド
  - React
  - JavaScript
  - Chakra UI
- 位置情報
  - Geolocation API
  - Google Maps API
- バックエンド
  - Go
  - PostgreSQL

## バックエンドリポジトリ

[https://github.com/sekibuuun/WanderVive_back](https://github.com/sekibuuun/WanderVive_back)

## スライド

[Canva](https://www.canva.com/design/DAF_Eszy4kY/SAt3Iep-MUrBlriMT75Vaw/edit?utm_content=DAF_Eszy4kY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
