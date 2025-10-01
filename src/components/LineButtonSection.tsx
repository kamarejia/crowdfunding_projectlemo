import SpaceSectionWrapper from './SpaceSectionWrapper'

export default function LineButtonSection() {
  return (
    <SpaceSectionWrapper className="py-16" containerClassName="flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">LINE連携セクション</h2>
        <p className="text-gray-300">LINEでの情報配信やコミュニティ参加</p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
          LINE登録
        </button>
      </div>
    </SpaceSectionWrapper>
  )
}