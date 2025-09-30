export default function FinalButtonSection() {
  return (
    <section className="min-h-96 bg-gray-500 flex items-center justify-center border-4 border-red-500">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">最終アクション</h2>
        <p className="text-gray-200 mb-6">
          Project LEMOのクラウドファンディングに参加して、レモ星人と一緒にボードゲームの未来を作りましょう
        </p>
        <button className="px-8 py-4 bg-pink-500 text-white text-xl font-bold rounded-lg hover:bg-pink-600 transition-colors">
          クラウドファンディングに参加する
        </button>
      </div>
    </section>
  )
}