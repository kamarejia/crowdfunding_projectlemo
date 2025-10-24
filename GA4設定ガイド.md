# Google Analytics 4 設定記録

Project LEMO クラウドファンディングLP用のGA4設定情報

---

## 📊 実装済み機能

### 自動計測イベント
- `page_view` - ページ閲覧数
- `session_start` - セッション開始数
- `first_visit` - 初回訪問数
- `user_engagement` - ユーザーエンゲージメント

### カスタムイベント
- `line_register_click` - LINE登録ボタンクリック
  - パラメータ `button_location`: `hero_section` | `founding_section`
- `scroll_depth` - スクロール深度（セクション到達計測）
  - パラメータ `section_name`: `HeroSection` | `MangaSection` | `LemoSection` | `SystemSection` | `InteriorSection` | `FoundingSection`

---

## ⚙️ 設定情報

### Vercel環境変数
- **変数名**: `NEXT_PUBLIC_GA_ID`
- **値**: GA4測定ID（G-XXXXXXXXXX形式）
- **適用環境**: All Environments (Production, Preview, Development)

### 実装ファイル
- [src/app/layout.tsx](src/app/layout.tsx) - GoogleAnalyticsコンポーネント統合
- [src/components/ScrollTracker.tsx](src/components/ScrollTracker.tsx) - スクロール深度計測
- [src/components/HeroSection.tsx](src/components/HeroSection.tsx) - LINE登録ボタン（上部）
- [src/components/FoundingSection.tsx](src/components/FoundingSection.tsx) - LINE登録ボタン（下部）
- [src/app/page.tsx](src/app/page.tsx) - ScrollTracker配置、data-section属性設定

---

## 🔧 カスタムディメンション設定

GA4の「管理」→「カスタム定義」→「カスタムディメンションを作成」で登録：

### 1. セクション名
- **ディメンション名**: セクション名
- **範囲**: イベント
- **イベントパラメータ**: `section_name`

### 2. ボタン位置
- **ディメンション名**: ボタン位置
- **範囲**: イベント
- **イベントパラメータ**: `button_location`

※カスタムディメンション登録後、24時間以内に「探索」レポートで使用可能になります

---

## 📈 データ確認方法

### リアルタイムデータ
GA4 → 「レポート」→「リアルタイム」
- 現在の訪問者数
- 発生中のイベント
- イベント名をクリック → パラメータ詳細確認

### 過去データ（翌日以降）
GA4 → 「レポート」→「エンゲージメント」→「イベント」
- `line_register_click`: ボタンクリック数とボタン位置別内訳
- `scroll_depth`: 各セクション到達数（離脱分析）

### 探索レポート（カスタムディメンション登録後）
GA4 → 「探索」→ 空白レポート作成
- ディメンション検索で「セクション名」「ボタン位置」を追加
- 自由なレポート作成が可能

---

## 💡 データ活用例

### LINE登録率の改善
- `button_location`パラメータで上部・下部ボタンのクリック率比較
- クリック率が高い位置にデザインリソースを集中

### 離脱ポイントの特定
- `section_name`パラメータで各セクション到達率を算出
- 例: HeroSection 100人 → MangaSection 80人 → 20%離脱
- 離脱が多いセクションを優先的に改善

---

## 🎯 技術詳細

### 使用パッケージ
- `@next/third-parties` - Next.js公式GA4統合

### スクロール計測仕様
- Intersection Observer API使用
- 各セクション30%表示時にイベント発火
- 重複計測防止機能あり

### ボタンクリック計測仕様
- `onClick`ハンドラーでイベント送信
- クラウドファンディング開始前: LINE登録URL
- 開始後: クラウドファンディングページURL（実装予定）

---

**最終更新日**: 2025-10-25
