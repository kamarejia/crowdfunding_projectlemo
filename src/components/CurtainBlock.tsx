import Image from 'next/image'

/**
 * CurtainBlock - ヒーローセクションの垂れ幕
 *
 * キービジュアル、ロゴ、タイトルを含む
 * スクロールに応じて上昇するアニメーション
 */

interface CurtainBlockProps {
  /** 幕の垂直移動量（px） */
  translateY: number
}

export default function CurtainBlock({ translateY }: CurtainBlockProps) {
  return (
    <div
      className="fixed top-0 left-1/2 -translate-x-1/2 z-[60] w-full max-w-mobile"
      style={{
        transform: `translate(-50%, -${translateY}px)`,
        willChange: 'transform'
      }}
    >
      {/* キービジュアルブロック - 577px高さ */}
      <div className="relative w-full h-[min(134.2vw,577px)]">
        {/* キービジュアル画像 */}
        <div className="absolute inset-0">
          <Image
            src="/assets/3_hero/キービジュアル.png"
            alt="Project LEMO Key Visual"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ロゴグループ - 左上配置 (Figma: left: 17px, top: 16px) */}
        <div className="absolute left-[min(3.95vw,17px)] top-[min(3.72vw,16px)] flex items-center gap-[min(2.09vw,9px)] z-10">
          <div className="relative w-[min(6.27vw,27px)] h-[min(6.27vw,27px)]">
            <Image
              src="/assets/3_hero/spacian_logo_square.svg"
              alt="Spacian Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="font-orbitron font-medium text-[min(4.18vw,18px)] text-white whitespace-nowrap">
            Spacian
          </p>
        </div>

        {/* タイトルブロック - 右下配置、右詰め */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[min(12.79vw,55px)] w-[min(88.06vw,379px)] flex flex-col items-end gap-[min(0.23vw,0px)] z-10">
          {/* スマホ向けボードゲームアプリ */}
          <p className="font-senobi-gothic font-bold text-[min(4.65vw,20px)] text-[#7cbbe8] leading-[1] text-right whitespace-nowrap">
            スマホ向けボードゲームアプリ
          </p>

          {/* プロジェクトレモタイポ - SVG */}
          <div className="relative w-[min(93.02vw,400px)] h-[min(17.44vw,75px)] translate-x-[min(3.26vw,14px)]">
            <Image
              src="/assets/3_hero/プロジェクトレモタイポ .svg"
              alt="Project:LEMO"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* プロジェクトレモ */}
          <p className="font-senobi-gothic font-bold text-[min(5.58vw,24px)] text-[#7cbbe8] leading-[1] text-right whitespace-nowrap">
            プロジェクトレモ
          </p>
        </div>
      </div>
    </div>
  )
}
