'use client'

/**
 * ページ全体で統一された宇宙背景コンポーネント
 * - fixed positionで1つだけレンダリング
 * - 星の数を増加（約150個）
 * - セクション間で連続した宇宙空間を演出
 * - 様々な煌めきバリエーション
 */

// 固定の星の位置データ（絶対座標用）
const generateStarPositions = (count: number, seed: number, pageHeight: number) => {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const random1 = Math.sin(seed + i * 12.9898) * 43758.5453123;
    const random2 = Math.sin(seed + i * 78.233) * 43758.5453123;
    const random3 = Math.sin(seed + i * 37.719) * 43758.5453123;
    const random4 = Math.sin(seed + i * 94.673) * 43758.5453123;
    const random5 = Math.sin(seed + i * 51.327) * 43758.5453123;

    const frac1 = random1 - Math.floor(random1);
    const frac2 = random2 - Math.floor(random2);
    const frac3 = random3 - Math.floor(random3);
    const frac4 = random4 - Math.floor(random4);
    const frac5 = random5 - Math.floor(random5);

    positions.push({
      left: Math.round(frac1 * 430), // 最大幅430px内（max-w-mobile）
      top: Math.round(frac2 * pageHeight), // ページ全体の高さ
      delay: Math.round(frac3 * 4000) / 1000, // 0-4秒のディレイ
      duration: Math.round((1 + frac4 * 2.5) * 1000) / 1000, // 1-3.5秒
      opacity: Math.round((0.4 + frac1 * 0.6) * 1000) / 1000, // 0.4-1.0
      size: Math.floor(frac5 * 3), // 0,1,2 (small, medium, large)
    });
  }
  return positions;
};

// ページ全体の推定高さ（セクションの合計）
const ESTIMATED_PAGE_HEIGHT = 5000; // 推定5000px

// 星のグループ生成（合計150個）
const whiteStars = generateStarPositions(80, 1, ESTIMATED_PAGE_HEIGHT);
const pinkStars = generateStarPositions(40, 200, ESTIMATED_PAGE_HEIGHT);
const blueStars = generateStarPositions(30, 400, ESTIMATED_PAGE_HEIGHT);

interface StarProps {
  left: number;
  top: number;
  delay: number;
  duration: number;
  opacity: number;
  size: number;
  color: 'white' | 'pink' | 'blue';
}

function Star({ left, top, delay, duration, opacity, size, color }: StarProps) {
  // サイズバリエーション: 0=small, 1=medium, 2=large
  const sizeClasses = [
    'w-[2px] h-[2px]',
    'w-[3px] h-[3px]',
    'w-[4px] h-[4px]',
  ];

  const colorStyles = {
    white: {
      bg: 'bg-white',
      shadow: [
        '0 0 8px rgba(255,255,255,0.9), 0 0 16px rgba(255,255,255,0.5)',
        '0 0 12px rgba(255,255,255,1), 0 0 24px rgba(255,255,255,0.6)',
        '0 0 16px rgba(255,255,255,1), 0 0 32px rgba(255,255,255,0.7)',
      ],
    },
    pink: {
      bg: 'bg-[#FF23D0]',
      shadow: [
        '0 0 10px #FF23D0, 0 0 20px rgba(255,35,208,0.5)',
        '0 0 15px #FF23D0, 0 0 30px rgba(255,35,208,0.6)',
        '0 0 20px #FF23D0, 0 0 40px rgba(255,35,208,0.7)',
      ],
    },
    blue: {
      bg: 'bg-cyan-300',
      shadow: [
        '0 0 10px rgba(103,232,249,0.9), 0 0 20px rgba(103,232,249,0.5)',
        '0 0 14px rgba(103,232,249,1), 0 0 28px rgba(103,232,249,0.6)',
        '0 0 18px rgba(103,232,249,1), 0 0 36px rgba(103,232,249,0.7)',
      ],
    },
  };

  const style = colorStyles[color];
  const sizeClass = sizeClasses[size];
  const shadow = style.shadow[size];

  return (
    <div
      className={`absolute ${sizeClass} ${style.bg} rounded-full`}
      style={{
        left: `${left}px`,
        top: `${top}px`,
        opacity,
        boxShadow: shadow,
        willChange: 'opacity, transform',
        animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

export default function GlobalSpaceBackground() {
  return (
    <>
      {/* fixed positionで画面全体に固定 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* 固定幅（430px）内のみに背景を制限、はみ出しは非表示 */}
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-mobile h-screen overflow-hidden">
          {/* ベース背景色 */}
          <div className="absolute inset-0 bg-[#13161b]" />

          {/* 星々のコンテナ - ページ全体の高さ */}
          <div
            className="absolute left-0 w-full"
            style={{
              height: `${ESTIMATED_PAGE_HEIGHT}px`,
              top: 0,
            }}
          >
            {/* 白い星 */}
            {whiteStars.map((star, i) => (
              <Star key={`white-${i}`} {...star} color="white" />
            ))}

            {/* ピンクの星 */}
            {pinkStars.map((star, i) => (
              <Star key={`pink-${i}`} {...star} color="pink" />
            ))}

            {/* 青い星 */}
            {blueStars.map((star, i) => (
              <Star key={`blue-${i}`} {...star} color="blue" />
            ))}
          </div>

          {/* 控えめな深宇宙エフェクト */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/[0.01] to-transparent opacity-20" />

          {/* 微細な星雲エフェクト */}
          <div
            className="absolute inset-0 bg-gradient-radial from-transparent via-blue-500/[0.005] to-transparent opacity-30 animate-pulse"
            style={{ animationDuration: '8s' }}
          />
        </div>

        {/* 固定幅を超える領域の背景色 */}
        <div className="absolute inset-0 bg-[#13161b] -z-10" />
      </div>
    </>
  );
}
