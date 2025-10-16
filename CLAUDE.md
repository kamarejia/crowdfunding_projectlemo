# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 開発環境コマンド

```bash
# 開発サーバーの起動
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm run start

# ESLintによるコード検証
npm run lint
```

### テスト実行
このプロジェクトには現在テストフレームワークが設定されていません。テストが必要な場合は、Jest + React Testing Libraryの導入を検討してください。

## プロジェクト概要

このプロジェクトは**Next.js 14**を使用した日本語対応のランディングページです。App Router（src/app）を採用し、TypeScript + Tailwind CSSで構築されています。宇宙をテーマにしたボードゲーム「Project LEMO」のクラウドファンディングキャンペーン用LPです。

## アーキテクチャ

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **フォント**: Google Fonts (Inter)
- **言語設定**: 日本語（`lang="ja"`）

### 主要ファイル構成

```
src/
├── app/
│   ├── globals.css      # Tailwindとカスタムスタイル
│   ├── layout.tsx       # ルートレイアウト（日本語設定、フォント読み込み）
│   └── page.tsx         # メインページ（全セクション統合、背景装飾配置）
├── components/
│   ├── GlobalSpaceBackground.tsx  # ページ全体の宇宙背景
│   ├── HeroSection.tsx            # ヒーローセクション（キービジュアル）
│   ├── MangaSection.tsx           # マンガセクション
│   ├── LemoSection.tsx            # レモ星人紹介セクション
│   ├── SystemSection.tsx          # ゲームシステム説明セクション
│   ├── InteriorSection.tsx        # インテリアセクション
│   ├── FoundingSection.tsx        # クラウドファンディングセクション
│   └── SpaceSectionWrapper.tsx    # セクション用宇宙背景ラッパー
├── lib/
│   └── constants.ts     # プロジェクト定数（色、テキスト、設定、日数計算関数）
└── types/
    └── index.ts         # TypeScript型定義
```

## 重要な設定

- **Tailwind設定**: `src/pages/**`, `src/components/**`, `src/app/**` パス対応
  - カスタムカラー: `lemo.*` (primary, secondary, dark, dark-secondary)
  - カスタム最大幅: `max-w-mobile` (430px)
  - カスタムスクリーン: `xs` (375px)
  - カスタムアニメーション: `scroll-right`, `scroll-left` (20s linear infinite)
  - Container Queries Plugin: コンテナベースのレスポンシブデザイン対応
- **Next.js設定**: デフォルト設定（カスタマイズなし）
- **言語**: 日本語UIとメタデータ
- **スタイル**: グラデーション背景、ダークモード対応CSS変数
- **最大幅**: `max-w-mobile` (430px) - スマホ向けLPのため、全てのセクションで要素は最大幅430pxまでに制限

## プロジェクト詳細

**Project LEMO**は、宇宙からやってきたレモ星人をテーマにしたスマホ向けボードゲームアプリのクラウドファンディングランディングページです。

### ページ構成（上から順に）
1. **HeroSection**: キービジュアル・プロジェクト情報・開始日カウントダウン
2. **MangaSection**: マンガ形式のストーリー紹介
3. **LemoSection**: レモ星人の紹介セクション
4. **SystemSection**: ゲームシステムの説明（3つのゲームモード等）
5. **InteriorSection**: 宇宙船インテリア紹介
6. **FoundingSection**: クラウドファンディング情報・CTA

注: セクション間には装飾用の惑星画像（青い星、サイコロの惑星）が配置されており、これらは`page.tsx`で直接管理されています。

### アセット管理

アセットは`public/assets/`配下に番号付きディレクトリで整理されています：

- `1_general/`: 汎用アセット
- `2_background/`: 背景画像（惑星、星等）
- `3_hero/`: ヒーローセクション用画像
- `4_manga/`: マンガセクション用画像
- `5_lemo/`: レモ星人紹介用画像
- `6_system/`: システムセクション用画像
- `7_interior/`: インテリアセクション用画像
- `8_founding/`: ファウンディングセクション用画像
- `fonts/`: カスタムフォントファイル

詳細は `public/assets/README.md` を参照してください。

### カラーパレット
- プライマリ: `#ff23d0` (ピンク・マゼンタ)
- ダークベース: `#13161b`
- 警告色: `#e4027e`
- 詳細は `src/lib/constants.ts` を参照

## コンポーネント設計原則

- **コンポーネント分離**: HeroSection、WarningSection等、機能別に分離
- **定数管理**: `src/lib/constants.ts` で色、テキスト、設定を一元管理
- **型安全性**: `src/types/index.ts` でプロジェクト固有の型を定義
- **Next.js Image**: 画像最適化のため Next.js Image コンポーネントを使用
- **レイアウト統一**: 全セクションで `max-w-mobile mx-auto` を使用し、コンテンツを中央配置かつ最大幅430pxに制限

## フォントとタイポグラフィ

- **Orbitron**: 英語見出し、SF感演出
- **M PLUS 1** (`mplus1`): 日本語本文、UI
- **Righteous** (`righteous`): 英語見出し、アクセント
- **Kaisotai** (`kaisotai`): 日本語見出し、個性的な表現
- **Senobi Gothic** (`senobi-gothic`): 日本語見出し、ゲーム風テキスト

## 開発時の注意点

- 新機能追加時は既存の日本語対応を維持してください
- Tailwind CSSのユーティリティクラスを活用してください
- TypeScriptの型安全性を保持してください
- デザインは `デザイン設計.md` を参照してください
- 型定義は `src/types/index.ts` を使用してください
- 画像アセットは `public/assets/` 配下に配置し、Next.js Imageを使用してください