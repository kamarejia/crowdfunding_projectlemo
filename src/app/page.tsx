import GlobalSpaceBackground from '@/components/GlobalSpaceBackground'
import HeroSection from '@/components/HeroSection'
import MangaSection from '@/components/MangaSection'
import WarningSection from '@/components/WarningSection'
import ConceptSection from '@/components/ConceptSection'
import LineButtonSection from '@/components/LineButtonSection'
import DevelopmentMotivationSection from '@/components/DevelopmentMotivationSection'
import FinalButtonSection from '@/components/FinalButtonSection'

export default function Home() {
  return (
    <>
      {/* ページ全体で統一された宇宙背景 */}
      <GlobalSpaceBackground />

      {/* メインコンテンツ */}
      <main className="relative z-10">
        <HeroSection />
        <MangaSection />
        <WarningSection />
        <ConceptSection />
        <LineButtonSection />
        <DevelopmentMotivationSection />
        <FinalButtonSection />
      </main>
    </>
  )
}