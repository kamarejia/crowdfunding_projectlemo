'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function MangaSection() {
  const [visibleFrames, setVisibleFrames] = useState<number[]>([])

  useEffect(() => {
    // 各コマを順番に表示（1.5秒間隔）
    const timers = [0, 1, 2, 3, 4, 5].map((index) =>
      setTimeout(() => {
        setVisibleFrames((prev) => [...prev, index])
      }, index * 1500)
    )

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  const frames = [
    { src: '/assets/images/lemomanga_png/lemomanga1.png', alt: 'レモ漫画 1', zIndex: 2 },
    { src: '/assets/images/lemomanga_png/lemomanga2-2.png', alt: 'レモ漫画 2', zIndex: 1 },
    { src: '/assets/images/lemomanga_png/lemomanga3.png', alt: 'レモ漫画 3', zIndex: 3 },
    { src: '/assets/images/lemomanga_png/lemomanga4.png', alt: 'レモ漫画 4', zIndex: 4 },
    { src: '/assets/images/lemomanga_png/lemomanga5.png', alt: 'レモ漫画 5', zIndex: 5 },
    { src: '/assets/images/lemomanga_png/lemomanga6.png', alt: 'レモ漫画 6', zIndex: 6 },
  ]

  return (
    <section className="relative bg-gray-100 overflow-hidden">
      {/* スマホ最大幅コンテナ */}
      <div className="relative max-w-mobile mx-auto">
        {/* 漫画画像コンテナ - 余白なし横幅いっぱい */}
        <div className="relative w-full aspect-[9/16]">
          {/* すべての漫画画像を同じ座標に重ねて表示 */}
          {frames.map((frame, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ${
                visibleFrames.includes(index)
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              }`}
              style={{ zIndex: frame.zIndex }}
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}