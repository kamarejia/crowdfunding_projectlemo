# Assets フォルダ

このフォルダはProject LEMOランディングページで使用する画像アセットを格納します。

## フォルダ構成

### `/images`
- キャラクターイラスト（レモ星人）
- ボードゲームビジュアル
- 背景画像
- その他コンテンツ画像

### `/icons`
- UIアイコン
- ソーシャルメディアアイコン
- 機能アイコン

### `/logos`
- Spacianロゴ
- プロジェクトロゴ
- パートナーロゴ

## 画像仕様

**推奨フォーマット:**
- PNG: 透明背景が必要な画像
- JPG: 写真・背景画像
- SVG: ロゴ・アイコン
- WebP: 最適化された画像（Next.js Image Optimizationと併用）

**推奨サイズ:**
- モバイル優先設計（393px基準）
- 高解像度ディスプレイ対応（2x, 3x）
- ファイルサイズ最適化推奨

## 使用方法

Next.js内では以下のように使用してください：

```tsx
import Image from 'next/image'

// 画像の例
<Image
  src="/assets/images/lemo-character.png"
  alt="レモ星人キャラクター"
  width={200}
  height={200}
/>

// ロゴの例
<Image
  src="/assets/logos/spacian-logo.svg"
  alt="Spacianロゴ"
  width={100}
  height={50}
/>
```

## 注意事項

- ファイル名は英数字とハイフンのみ使用
- 日本語ファイル名は避ける
- 適切なalt属性を設定
- 著作権・ライセンスに注意