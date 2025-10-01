import SpaceSectionWrapper from './SpaceSectionWrapper'

export default function DevelopmentMotivationSection() {
  return (
    <SpaceSectionWrapper className="py-16" containerClassName="px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-8">開発動機・現状の課題</h2>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
            <h3 className="text-xl font-bold mb-4 text-white">開発動機</h3>
            <p className="text-gray-300">
              ボードゲームの楽しさを多くの人に伝えたい想いから生まれたプロジェクト
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-white/20">
            <h3 className="text-xl font-bold mb-4 text-white">現状の課題</h3>
            <p className="text-gray-300">
              物理的な制約やアクセシビリティの問題を解決するデジタル化の必要性
            </p>
          </div>
        </div>
      </div>
    </SpaceSectionWrapper>
  )
}