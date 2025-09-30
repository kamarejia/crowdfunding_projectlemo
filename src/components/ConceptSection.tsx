import Image from 'next/image'

export default function ConceptSection() {
  return (
    <section className="min-h-screen bg-gray-200 py-16 border-4 border-green-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">ゲームコンセプト</h2>

        <div className="space-y-16">
          {/* 1番目: 集まって泳ぎ回って */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src="/assets/images/interior.png"
                alt="集まって泳ぎ回って - 宇宙船の内部でレモ星人たちが活動している様子"
                width={400}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">集まって泳ぎ回って</h3>
            <p className="text-gray-600 text-center">2-4人のマルチプレイ対応</p>
            <p className="text-gray-600 text-center">もちろん1人でも</p>
          </div>

          {/* 2番目: アンビに合わせた3モード */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md h-64 bg-purple-300 border-2 border-purple-600 rounded-lg flex items-center justify-center mb-4">
              <p className="text-purple-800 font-bold">ゲーム画面プレースホルダー</p>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">アンビに合わせた3モード</h3>
            <p className="text-gray-600 text-center">本気の勝負ならソロ</p>
            <p className="text-gray-600 text-center">みんなでわいわいオープン</p>
            <p className="text-gray-600 text-center">ひっそりじっくりプライベート</p>
          </div>

          {/* 3番目: 様々なゲームでレモワールド展開 */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src="/assets/images/nimmtimage1.png"
                alt="様々なゲームでレモワールド展開 - ニムトゲームでレモ星人たちが遊んでいる様子"
                width={400}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">様々なゲームでレモワールド展開</h3>
            <p className="text-gray-600 text-center">ゲーム世界に入り込んだレモたち</p>
            <p className="text-gray-600 text-center">レモ×ボードゲームの新体験</p>
          </div>
        </div>
      </div>
    </section>
  )
}