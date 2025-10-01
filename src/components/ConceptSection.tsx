import Image from 'next/image'
import SpaceSectionWrapper from './SpaceSectionWrapper'

export default function ConceptSection() {
  return (
    <SpaceSectionWrapper className="py-16">
      <div className="px-4 max-w-mobile mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">ゲームコンセプト</h2>
      </div>

      <div className="space-y-16">
        {/* 1番目: 集まって泳ぎ回って */}
        <div className="flex flex-col items-center">
          {/* 画像を画面幅いっぱいに拡大 (max-w-mobile = 768px) - 高さを増やして拡大 */}
          <div className="w-full max-w-mobile relative aspect-[4/3] overflow-hidden mb-6">
            <Image
              src="/assets/images/interior.png"
              alt="集まって泳ぎ回って - 宇宙船の内部でレモ星人たちが活動している様子"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="px-4 max-w-mobile w-full">
            <h3 className="text-2xl font-bold text-white mb-3 text-center">集まって泳ぎ回って</h3>
            <p className="text-gray-300 text-center text-lg">2-4人のマルチプレイ対応</p>
            <p className="text-gray-300 text-center text-lg">もちろん1人でも</p>
          </div>
        </div>

        {/* 2番目: アンビに合わせた3モード */}
        <div className="flex flex-col items-center px-4 max-w-mobile mx-auto w-full">
          <h3 className="text-2xl font-bold text-white mb-6">アンビに合わせた3モード</h3>

          {/* 3つのゲームモード画像を横並び配置 - gap拡大 */}
          <div className="w-full grid grid-cols-3 gap-4 mb-4">
            {/* ソロモード */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg mb-3">
                <Image
                  src="/assets/images/3mode/gamemode_solo_2.png"
                  alt="ソロモード"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 33vw, 256px"
                />
              </div>
              <p className="text-gray-300 text-sm text-center font-medium">本気の勝負ならソロ</p>
            </div>

            {/* オープンモード */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg mb-3">
                <Image
                  src="/assets/images/3mode/gamemode_open_2.png"
                  alt="オープンモード"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 33vw, 256px"
                />
              </div>
              <p className="text-gray-300 text-sm text-center font-medium">みんなでわいわいオープン</p>
            </div>

            {/* プライベートモード */}
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg mb-3">
                <Image
                  src="/assets/images/3mode/gamemode_private_2.png"
                  alt="プライベートモード"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 33vw, 256px"
                />
              </div>
              <p className="text-gray-300 text-sm text-center font-medium">ひっそりじっくりプライベート</p>
            </div>
          </div>
        </div>

        {/* 3番目: 様々なゲームでレモワールド展開 */}
        <div className="flex flex-col items-center px-4 max-w-mobile mx-auto w-full">
          <div className="relative w-full max-w-md h-64 rounded-lg overflow-hidden mb-4">
            <Image
              src="/assets/images/nimmtimage1.png"
              alt="様々なゲームでレモワールド展開 - ニムトゲームでレモ星人たちが遊んでいる様子"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">様々なゲームでレモワールド展開</h3>
          <p className="text-gray-300 text-center">ゲーム世界に入り込んだレモたち</p>
          <p className="text-gray-300 text-center">レモ×ボードゲームの新体験</p>
        </div>
      </div>
    </SpaceSectionWrapper>
  )
}