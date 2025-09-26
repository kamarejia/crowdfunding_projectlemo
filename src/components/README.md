# Components フォルダ

Project LEMOランディングページのReactコンポーネントを格納します。

## 予定コンポーネント構成

### Layout Components
- `Header.tsx` - ナビゲーションヘッダー
- `Footer.tsx` - フッター
- `Layout.tsx` - 共通レイアウト

### Section Components
- `HeroSection.tsx` - メインビジュアルセクション
- `WarningSection.tsx` - レモ星人警告セクション
- `NewsSection.tsx` - ニュース記事セクション

### UI Components
- `Button.tsx` - CTA/アクションボタン
- `Logo.tsx` - Spacianロゴコンポーネント
- `CharacterCard.tsx` - レモ星人キャラクター表示
- `NewsCard.tsx` - ニュース記事カード
- `AnimatedStripe.tsx` - 警告ストライプアニメーション

### 命名規則
- PascalCase (例: `HeroSection.tsx`)
- 機能別フォルダ分けも検討 (`ui/`, `sections/`, `layout/`)
- Storybook対応も検討

### 実装方針
- TypeScript使用
- Tailwind CSSでスタイリング
- Next.js Imageコンポーネント活用
- アクセシビリティ対応
- レスポンシブデザイン