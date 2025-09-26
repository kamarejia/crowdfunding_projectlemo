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

## プロジェクト概要

このプロジェクトは**Next.js 14**を使用した日本語対応のランディングページです。App Router（src/app）を採用し、TypeScript + Tailwind CSSで構築されています。現在は「準備中（Coming Soon）」ページとして機能しています。

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
│   ├── layout.tsx       # ルートレイアウト（日本語設定）
│   └── page.tsx         # メインページ（準備中表示）
```

## 重要な設定

- **Tailwind設定**: `src/pages/**`, `src/components/**`, `src/app/**` パス対応
- **Next.js設定**: デフォルト設定（カスタマイズなし）
- **言語**: 日本語UIとメタデータ
- **スタイル**: グラデーション背景、ダークモード対応CSS変数

## プロジェクト詳細

**Project LEMO**は、宇宙からやってきたレモ星人をテーマにしたスマホ向けボードゲームアプリのクラウドファンディングランディングページです。

### 主要機能
- ヒーローセクション（キービジュアル・プロジェクト情報）
- 警告セクション（レモ星人の特徴紹介）
- ニュースセクション（世界観演出）

### アセット管理
- 画像: `public/assets/images/`
- アイコン: `public/assets/icons/`
- ロゴ: `public/assets/logos/`
- 詳細は `public/assets/README.md` を参照

### カラーパレット
- プライマリ: `#ff23d0` (ピンク・マゼンタ)
- ダークベース: `#13161b`
- 警告色: `#e4027e`
- 詳細は `src/lib/constants.ts` を参照

## 開発時の注意点

- 新機能追加時は既存の日本語対応を維持してください
- Tailwind CSSのユーティリティクラスを活用してください
- TypeScriptの型安全性を保持してください
- デザインは `デザイン設計.md` を参照してください
- 型定義は `src/types/index.ts` を使用してください