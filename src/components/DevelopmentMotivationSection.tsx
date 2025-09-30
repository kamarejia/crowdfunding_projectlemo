export default function DevelopmentMotivationSection() {
  return (
    <section className="min-h-screen bg-gray-400 py-16 border-4 border-purple-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">開発動機・現状の課題</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">開発動機</h3>
              <p className="text-gray-600">
                ボードゲームの楽しさを多くの人に伝えたい想いから生まれたプロジェクト
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">現状の課題</h3>
              <p className="text-gray-600">
                物理的な制約やアクセシビリティの問題を解決するデジタル化の必要性
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}