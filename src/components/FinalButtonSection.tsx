import SpaceSectionWrapper from './SpaceSectionWrapper'

export default function FinalButtonSection() {
  return (
    <SpaceSectionWrapper className="py-24" containerClassName="flex items-center justify-center">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">最終アクション</h2>
        <p className="text-gray-300 mb-6">
          Project LEMOのクラウドファンディングに参加して、レモ星人と一緒にボードゲームの未来を作りましょう
        </p>
        <button className="px-8 py-4 bg-[#FF23D0] text-white text-xl font-bold rounded-lg hover:bg-lemo-secondary transition-colors">
          クラウドファンディングに参加する
        </button>
      </div>
    </SpaceSectionWrapper>
  )
}