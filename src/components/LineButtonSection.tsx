export default function LineButtonSection() {
  return (
    <section className="min-h-64 bg-gray-300 flex items-center justify-center border-4 border-yellow-500">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">LINE連携セクション</h2>
        <p className="text-gray-600">LINEでの情報配信やコミュニティ参加</p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
          LINE登録
        </button>
      </div>
    </section>
  )
}