'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function LemoSection() {
  const [currentFrame, setCurrentFrame] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // レモのアニメーションループ（旧WarningSection再利用）
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev >= 5 ? 1 : prev + 1))
    }, 300) // 0.3秒間隔でフレーム切り替え
    return () => clearInterval(interval)
  }, [])

  // スクロール検知とタイトルアニメーション
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            // 「ボードゲームを」を最初に表示
            setTimeout(() => setShowFirst(true), 100)
            // 「奪いにきた!?」を遅延して表示
            setTimeout(() => setShowSecond(true), 400)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60% 0px' // 画面上部40%の位置で判定
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="relative w-full py-16">
      {/* メインコンテナ */}
      <div className="relative max-w-mobile mx-auto text-responsive-xs">

        {/* タイトルブロック - 402px基準 */}
        <div className="relative w-full max-w-[100vw] mx-auto h-[min(19.9vw,86px)] mb-8">
          {/* ボードゲームを - 左上詰め */}
          <div
            className={`absolute top-0 left-0 transition-all duration-500 ${
              showFirst
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ transform: showFirst ? 'rotate(-8.058deg)' : 'rotate(-8.058deg) translateY(-16px)' }}
          >
            <p className="relative font-senobi-gothic font-bold text-white text-[min(8.71vw,37px)] leading-[min(13.06vw,56px)] whitespace-nowrap tracking-normal">
              <span className="relative">
                <span className="absolute inset-0 bg-[#ff36e3] h-[min(9.83vw,42px)]" />
                <span className="relative px-2">ボードゲーム</span>
              </span>を
            </p>
          </div>

          {/* 奪いにきた!? - 右下詰め */}
          <div
            className={`absolute bottom-0 right-0 transition-all duration-500 ${
              showSecond
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transform: showSecond ? 'rotate(-8.058deg)' : 'rotate(-8.058deg) translateY(16px)' }}
          >
            <p className="font-senobi-gothic font-bold text-white text-[min(8.71vw,37px)] leading-[min(13.06vw,56px)] whitespace-nowrap tracking-normal">
              奪いにきた!?
            </p>
          </div>
        </div>

        {/* レモブロック - 4分割グリッドレイアウト */}
        <div className="relative w-full max-w-[102vw] mx-auto">
          {/* 背景: レモアニメーション（中央配置） */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="relative w-[min(62.69vw,270px)] h-[min(62.69vw,270px)]">
              <Image
                src={`/assets/5_lemo/${currentFrame}.png`}
                alt="レモ星人"
                width={252}
                height={252}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* 4分割グリッド: 2×2 */}
          <div className="relative grid grid-cols-2 grid-rows-2 w-full h-[min(103.48vw,445px)] z-10">
            {/* 左上: 特徴1 - ピンクのアンテナ */}
            <div className="relative flex flex-col items-start justify-start p-[min(3.98vw,17px)]">
              {/* アンテナ画像 */}
              <div className="relative w-[min(19.9vw,86px)] h-[min(21.89vw,94px)] ml-auto mb-2">
                <Image
                  src="/assets/5_lemo/アンテナ.png"
                  alt="ピンクのアンテナ"
                  fill
                  className="object-contain"
                />
              </div>

              {/* 特徴テキスト1 */}
              <div className="w-full">
                <div className="relative inline-block">
                  <div className="absolute left-0 top-[1px] bg-[#e4027e] h-[min(5.72vw,25px)] w-[min(37.31vw,160px)]" />
                  <h1 className="relative font-senobi-gothic font-bold text-white text-[min(4.48vw,19px)] leading-[normal] whitespace-nowrap px-1">
                    ピンクのアンテナ
                  </h1>
                </div>
                <p className="font-senobi-gothic font-medium text-[#e4027e] text-[min(3.98vw,17px)] leading-[normal] mt-2 whitespace-pre-line">
                  ときおり動いている{'\n'}何かを察知している？
                </p>
              </div>
            </div>

            {/* 右上: 特徴2 - レモンのような頭 */}
            <div className="relative flex flex-col items-end justify-start p-[min(3.98vw,17px)]">
              {/* 特徴テキスト2 */}
              <div className="w-full text-right">
                <div className="relative inline-block">
                  <div className="absolute left-0 top-0 bg-[#e4027e] h-[min(6.47vw,28px)] w-[min(37.31vw,160px)]" />
                  <h1 className="relative font-senobi-gothic font-bold text-white text-[min(4.48vw,19px)] leading-[normal] whitespace-nowrap px-1">
                    レモンのような頭
                  </h1>
                </div>
                <p className="font-senobi-gothic font-medium text-[#e4027e] text-[min(3.73vw,16px)] leading-[normal] mt-2 whitespace-pre-line">
                  その見た目からNYASAの{'\n'}学者がLEMOと命名。
                </p>
              </div>

              {/* レモン画像 */}
              <div className="relative w-[min(24.13vw,104px)] h-[min(17.16vw,74px)] mt-2">
                <Image
                  src="/assets/5_lemo/lemon.png"
                  alt="レモンのような頭"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 左下: 特徴3 - イルカのような肌 */}
            <div className="relative flex flex-col items-start justify-end p-[min(3.98vw,17px)]">
              {/* おぼれも画像 */}
              <div className="relative w-[min(30.6vw,132px)] h-[min(21.14vw,91px)] mb-2">
                <Image
                  src="/assets/5_lemo/おぼれも.png"
                  alt="イルカのような肌"
                  fill
                  className="object-contain"
                />
              </div>

              {/* 特徴テキスト3 */}
              <div className="w-full">
                <div className="relative inline-block">
                  <div className="absolute left-0 top-0 bg-[#e4027e] h-[min(6.47vw,28px)] w-[min(37.56vw,161px)]" />
                  <h1 className="relative font-senobi-gothic font-bold text-white text-[min(4.48vw,19px)] leading-[normal] whitespace-nowrap px-1">
                    イルカのような肌
                  </h1>
                </div>
                <p className="font-senobi-gothic font-medium text-[#e4027e] text-[min(3.98vw,17px)] leading-[normal] mt-2 whitespace-pre-line">
                  溺れている事例あり。{'\n'}おそらくカナヅチ。
                </p>
              </div>
            </div>

            {/* 右下: レモの名前ブロック */}
            <div className="relative flex flex-col items-end justify-end p-[min(3.98vw,17px)]">
              <div className="flex flex-col items-end">
                {/* 装飾上（180度回転） */}
                <div className="relative w-[min(35.57vw,153px)] h-[min(1.99vw,9px)] mb-1">
                  <Image
                    src="/assets/5_lemo/装飾上.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>

                {/* ナゾのうちゅうじん */}
                <p className="font-senobi-gothic font-medium text-white text-[min(3.98vw,17px)] leading-[normal] text-right mb-2">
                  ナゾのうちゅうじん
                </p>

                {/* レモタイポ */}
                <div className="relative w-[min(30.85vw,133px)] h-[min(19.4vw,83px)] mb-1">
                  <Image
                    src="/assets/5_lemo/レモタイポ.svg"
                    alt="レモ"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* 装飾下 */}
                <div className="relative w-[min(35.57vw,153px)] h-[min(1.99vw,9px)]">
                  <Image
                    src="/assets/5_lemo/装飾下.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
