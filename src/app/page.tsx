import Image from 'next/image'
import GlobalSpaceBackground from '@/components/GlobalSpaceBackground'
import HeroSection from '@/components/HeroSection'
import MangaSection from '@/components/MangaSection'
import LemoSection from '@/components/LemoSection'
import SystemSection from '@/components/SystemSection'
import InteriorSection from '@/components/InteriorSection'
import FoundingSection from '@/components/FoundingSection'

export default function Home() {
  return (
    <>
      {/* ページ全体で統一された宇宙背景 */}
      <GlobalSpaceBackground />

      {/* メインコンテンツ */}
      <main className="relative z-10 overflow-hidden">
        <HeroSection />
        <MangaSection />
        <LemoSection />

        {/* 青い星 - LemoとSystemセクション間 */}
        <div className="relative w-full h-0 pointer-events-none">
          <div className="absolute top-[max(-60vw,-258px)] right-[max(-50vw,-215px)] w-[min(120vw,516px)] h-[min(120vw,516px)] z-0">
            <Image
              src="/assets/2_background/あおいほし.png"
              alt=""
              fill
              className="object-contain "
            />
          </div>
        </div>

        <SystemSection />
        <InteriorSection />

        {/* サイコロの惑星 - InteriorとFoundingセクション間 */}
        <div className="relative w-full h-0 pointer-events-none">
          <div className="absolute top-[max(-60vw,-258px)] left-[max(-17.41vw,-75px)] w-[min(74.13vw,319px)] h-[min(75.12vw,323px)] -z-10">
            <Image
              src="/assets/2_background/サイコロ惑星.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        <FoundingSection />
      </main>
    </>
  )
}