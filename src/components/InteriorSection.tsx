'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SpaceSectionWrapper from './SpaceSectionWrapper'

export default function InteriorSection() {
  // タイトルブロック
  const [gameTextVisible, setGameTextVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)

  // コスチュームブロック
  const [costumeTextVisible, setCostumeTextVisible] = useState(false)
  const costumeRef = useRef<HTMLDivElement>(null)

  // インテリアブロック
  const [interiorTextVisible, setInteriorTextVisible] = useState(false)
  const interiorRef = useRef<HTMLDivElement>(null)

  // タイトルブロック Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setGameTextVisible(true), 200)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60% 0px' // 画面上部40%の位置で判定
      }
    )

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
    }
  }, [])

  // コスチュームブロック Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setCostumeTextVisible(true), 300)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60% 0px' // 画面上部40%の位置で判定
      }
    )

    if (costumeRef.current) {
      observer.observe(costumeRef.current)
    }

    return () => {
      if (costumeRef.current) {
        observer.unobserve(costumeRef.current)
      }
    }
  }, [])

  // インテリアブロック Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setInteriorTextVisible(true), 300)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60% 0px' // 画面上部40%の位置で判定
      }
    )

    if (interiorRef.current) {
      observer.observe(interiorRef.current)
    }

    return () => {
      if (interiorRef.current) {
        observer.unobserve(interiorRef.current)
      }
    }
  }, [])

  return (
    <SpaceSectionWrapper className="py-16">
      <div className="relative w-full max-w-mobile mx-auto text-responsive-xs">

        {/* タイトルブロック */}
        <div ref={titleRef} className="relative mb-12">
          {/* Project:LEMOの見どころ + 装飾ライン（ベース構造） */}
          <div>
            <p className="font-senobi-gothic font-bold text-white text-[min(10.45vw,45px)] tracking-[max(-1.36vw,-6px)] whitespace-nowrap">
              Project:LEMO
              <span className="text-[min(9.45vw,41px)] tracking-[max(-1.23vw,-5px)] ml-1">の見どころ</span>
            </p>

            {/* 見出し装飾 */}
            <div className="relative w-[95%] h-[9px] mt-2">
              <Image
                src="/assets/7_interior/見出し装飾青.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* ゲームだけじゃない！ - 絶対配置、回転（右捻り）、右詰め、バウンスアニメーション */}
          <div
            className="absolute top-[max(-10.23vw,-44px)] right-0"
            style={{
              animation: gameTextVisible ? 'bounceDownRight 1.2s ease-out forwards' : 'none',
              opacity: gameTextVisible ? 1 : 0
            }}
          >
            <p className="font-senobi-gothic font-bold text-[#47fffc] text-[min(7.46vw,32px)] tracking-[max(-1.12vw,-5px)] whitespace-nowrap">
              ゲームだけじゃない！
            </p>
          </div>
        </div>

        {/* コスチュームブロック */}
        <div ref={costumeRef} className="relative h-[min(99.5vw,428px)] mb-16">
          {/* テキスト: すがたをかえて 自分らしく - 左上、ゆっくりフェードイン */}
          <div
            className="absolute top-0 left-0 z-20"
            style={{
              animation: costumeTextVisible ? 'fadeInSlow 1.5s ease-out forwards' : 'none',
              opacity: costumeTextVisible ? 1 : 0
            }}
          >
            <p className="font-senobi-gothic font-bold text-white text-[min(8.71vw,37px)] tracking-[max(-1.31vw,-6px)] whitespace-nowrap">
              すがたをかえて
            </p>
            <p className="font-senobi-gothic font-bold text-white text-[min(8.71vw,37px)] tracking-[max(-1.31vw,-6px)] whitespace-nowrap mt-2">
              自分らしく
            </p>
          </div>

          {/* profile画像 - 画面半分位置、下層 */}
          <div
            className="absolute left-[min(47.76vw,205px)] top-[max(-2.49vw,-11px)] w-[min(45.77vw,197px)] h-[min(62.19vw,267px)] z-0"
            style={{ transform: 'rotate(9.779deg)' }}
          >
            <Image
              src="/assets/7_interior/プロフィール.jpg"
              alt="プロフィール"
              fill
              className="object-cover"
            />
          </div>

          {/* れもとりどり画像 - 基準、中層 */}
          <div className="absolute left-0 top-[min(23.88vw,103px)] w-[min(87.31vw,375px)] h-[min(64.68vw,278px)] z-10">
            <Image
              src="/assets/7_interior/れもとりどり.png"
              alt="れもとりどり"
              fill
              className="object-cover"
            />
          </div>

          {/* テキスト2: オムレモ、ウシレモ... - 左マージン */}
          <p className="absolute bottom-0 left-4 font-senobi-gothic font-bold text-white text-[min(4.73vw,20px)] leading-[normal]">
            オムレモ、ウシレモ<br />
            レモいキャラが盛りだくさん
          </p>
        </div>

        {/* ピンクの惑星 - 背景 */}
        <div className="absolute top-[min(69.65vw,300px)] right-[max(-19.9vw,-86px)] w-[min(107.71vw,463px)] h-[min(107.21vw,461px)] -z-10">
          <Image
            src="/assets/2_background/ピンクの惑星.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* インテリアブロック */}
        <div ref={interiorRef} className="relative">
          {/* インテリア画像 */}
          <div className="relative w-[min(100vw,430px)] h-[min(96.77vw,416px)] mb-4">
            <Image
              src="/assets/7_interior/インテリア.png"
              alt="インテリア"
              fill
              className="object-cover"
            />
          </div>

          {/* テキスト1: インテリアで魅せる 自慢の宇宙船 - 左寄せ、右詰め、ゆっくりフェードイン */}
          <div
            className="absolute top-[42px] left-[20px]"
            style={{
              animation: interiorTextVisible ? 'fadeInSlow 1.5s ease-out forwards' : 'none',
              opacity: interiorTextVisible ? 1 : 0
            }}
          >
            <p className="font-senobi-gothic font-bold text-white text-[min(8.71vw,37px)] tracking-[max(-1.31vw,-6px)] text-right whitespace-nowrap">
              インテリアで魅せる
            </p>
            <p className="font-senobi-gothic font-bold text-white text-[min(8.71vw,37px)] tracking-[max(-1.31vw,-6px)] text-right whitespace-nowrap mt-2">
              自慢の宇宙船
            </p>
          </div>

          {/* テキスト2: みんなを招いて ゲームパーティー！ - 下、右詰めブロック、左詰めテキスト */}
          <div className="absolute bottom-[-20px] right-0">
            <p className="font-senobi-gothic font-bold text-white text-[min(4.98vw,21px)] leading-[normal] text-left">
              みんなを招いて<br />
              ゲームパーティー！
            </p>
          </div>
        </div>

      </div>
    </SpaceSectionWrapper>
  )
}
