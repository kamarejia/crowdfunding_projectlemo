'use client'

// 固定の星の位置データ（SSR対応）
const generateStarPositions = (count: number, seed: number) => {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const random1 = Math.sin(seed + i * 12.9898) * 43758.5453123;
    const random2 = Math.sin(seed + i * 78.233) * 43758.5453123;
    const random3 = Math.sin(seed + i * 37.719) * 43758.5453123;
    const random4 = Math.sin(seed + i * 94.673) * 43758.5453123;

    // 小数点以下の精度を制限して完全一致させる
    const frac1 = Math.round((random1 - Math.floor(random1)) * 1000000) / 1000000;
    const frac2 = Math.round((random2 - Math.floor(random2)) * 1000000) / 1000000;
    const frac3 = Math.round((random3 - Math.floor(random3)) * 1000000) / 1000000;
    const frac4 = Math.round((random4 - Math.floor(random4)) * 1000000) / 1000000;

    positions.push({
      left: Math.round(frac1 * 10000) / 100,
      top: Math.round(frac2 * 10000) / 100,
      delay: Math.round(frac3 * 3000) / 1000,
      duration: Math.round((1.5 + frac4 * 2) * 1000) / 1000,
      opacity: Math.round((0.8 + frac1 * 0.2) * 1000) / 1000,
    });
  }
  return positions;
};

const normalStars = generateStarPositions(50, 1);
const topRightStars = generateStarPositions(25, 100).map(star => ({
  ...star,
  left: Math.round((60 + star.left * 0.35) * 100) / 100,
  top: Math.round((star.top * 0.4) * 100) / 100,
}));
const bottomStars = generateStarPositions(20, 700).map(star => ({
  ...star,
  top: Math.round((70 + star.top * 0.3) * 100) / 100,
}));

const pinkStars = generateStarPositions(12, 200);
const pinkTopRightStars = generateStarPositions(6, 300).map(star => ({
  ...star,
  left: Math.round((65 + star.left * 0.3) * 100) / 100,
  top: Math.round((star.top * 0.35) * 100) / 100,
}));
const pinkBottomStars = generateStarPositions(4, 800).map(star => ({
  ...star,
  top: Math.round((75 + star.top * 0.25) * 100) / 100,
}));

const blueStars = generateStarPositions(15, 400);
const blueTopRightStars = generateStarPositions(8, 500).map(star => ({
  ...star,
  left: Math.round((70 + star.left * 0.25) * 100) / 100,
  top: Math.round((star.top * 0.3) * 100) / 100,
}));
const blueBottomStars = generateStarPositions(6, 900).map(star => ({
  ...star,
  top: Math.round((80 + star.top * 0.2) * 100) / 100,
}));


export default function SpaceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* ベース背景 - #13161B統一 */}
      <div className="absolute inset-0 bg-[#13161b]" />

      {/* 星々 - キービジュアル中心の回転（ゆっくり） */}
      <div className="absolute inset-0 origin-center animate-spin" style={{ animationDuration: '600s', transformOrigin: '50% 35%' }}>
        {/* 通常の星 */}
        {normalStars.map((star, i) => (
          <div
            key={i}
            className="absolute w-[4px] h-[4px] bg-white rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: star.opacity,
              boxShadow: '0 0 12px rgba(255,255,255,1), 0 0 24px rgba(255,255,255,0.5)',
            }}
          />
        ))}

        {/* 右上集中の星 */}
        {topRightStars.map((star, i) => (
          <div
            key={`top-right-${i}`}
            className="absolute w-[4px] h-[4px] bg-white rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: star.opacity,
              boxShadow: '0 0 12px rgba(255,255,255,1), 0 0 24px rgba(255,255,255,0.5)',
            }}
          />
        ))}

        {/* 下部の星 */}
        {bottomStars.map((star, i) => (
          <div
            key={`bottom-${i}`}
            className="absolute w-[4px] h-[4px] bg-white rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: star.opacity,
              boxShadow: '0 0 12px rgba(255,255,255,1), 0 0 24px rgba(255,255,255,0.5)',
            }}
          />
        ))}
      </div>

      {/* 大きなピンクの星 - キービジュアル中心の逆回転（ゆっくり） */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '800s', animationDirection: 'reverse', transformOrigin: '50% 35%' }}>
        {pinkStars.map((star, i) => (
          <div
            key={`big-${i}`}
            className="absolute w-[6px] h-[6px] bg-[#FF23D0] rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay + 1}s`,
              animationDuration: `${star.duration + 0.5}s`,
              opacity: 0.9 + (star.opacity - 0.8) * 0.5,
              boxShadow: '0 0 20px #FF23D0, 0 0 40px rgba(255,35,208,0.6)',
            }}
          />
        ))}

        {/* 右上集中のピンクの星 */}
        {pinkTopRightStars.map((star, i) => (
          <div
            key={`big-top-right-${i}`}
            className="absolute w-[6px] h-[6px] bg-[#FF23D0] rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay + 1}s`,
              animationDuration: `${star.duration + 0.5}s`,
              opacity: 0.9 + (star.opacity - 0.8) * 0.5,
              boxShadow: '0 0 20px #FF23D0, 0 0 40px rgba(255,35,208,0.6)',
            }}
          />
        ))}

        {/* 下部のピンクの星 */}
        {pinkBottomStars.map((star, i) => (
          <div
            key={`big-bottom-${i}`}
            className="absolute w-[6px] h-[6px] bg-[#FF23D0] rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay + 1}s`,
              animationDuration: `${star.duration + 0.5}s`,
              opacity: 0.9 + (star.opacity - 0.8) * 0.5,
              boxShadow: '0 0 20px #FF23D0, 0 0 40px rgba(255,35,208,0.6)',
            }}
          />
        ))}
      </div>

      {/* 青い星 - キービジュアル中心の中速回転（ゆっくり） */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '1000s', transformOrigin: '50% 35%' }}>
        {blueStars.map((star, i) => (
          <div
            key={`blue-${i}`}
            className="absolute w-[3px] h-[3px] bg-cyan-300 rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay + 2}s`,
              animationDuration: `${star.duration + 1}s`,
              opacity: 0.7 + star.opacity * 0.3,
              boxShadow: '0 0 15px rgba(103,232,249,0.8), 0 0 30px rgba(103,232,249,0.4)',
            }}
          />
        ))}

        {/* 右上集中の青い星 */}
        {blueTopRightStars.map((star, i) => (
          <div
            key={`blue-top-right-${i}`}
            className="absolute w-[3px] h-[3px] bg-cyan-300 rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay + 2}s`,
              animationDuration: `${star.duration + 1}s`,
              opacity: 0.7 + star.opacity * 0.3,
              boxShadow: '0 0 15px rgba(103,232,249,0.8), 0 0 30px rgba(103,232,249,0.4)',
            }}
          />
        ))}

        {/* 下部の青い星 */}
        {blueBottomStars.map((star, i) => (
          <div
            key={`blue-bottom-${i}`}
            className="absolute w-[3px] h-[3px] bg-cyan-300 rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay + 2}s`,
              animationDuration: `${star.duration + 1}s`,
              opacity: 0.7 + star.opacity * 0.3,
              boxShadow: '0 0 15px rgba(103,232,249,0.8), 0 0 30px rgba(103,232,249,0.4)',
            }}
          />
        ))}
      </div>


      {/* 控えめな深宇宙エフェクト */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/[0.01] to-transparent opacity-30" />

      {/* 微細な星雲エフェクト */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-blue-500/[0.005] to-transparent opacity-40 animate-pulse" style={{ animationDuration: '8s' }} />

      {/* 微細なノイズ */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  )
}