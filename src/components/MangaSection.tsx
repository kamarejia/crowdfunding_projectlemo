'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import SpaceSectionWrapper from './SpaceSectionWrapper'

export default function MangaSection() {
  const [visibleFrames, setVisibleFrames] = useState<number[]>([])
  const [showDebugLine, setShowDebugLine] = useState(true) // デバッグライン表示
  const sectionRef = useRef<HTMLDivElement>(null)
  const timersRef = useRef<NodeJS.Timeout[]>([])
  const hasTriggeredRef = useRef(false)

  useEffect(() => {
    const currentRef = sectionRef.current

    if (!currentRef) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true
            // 各コマを順番に表示（0.5秒間隔）
            timersRef.current = [0, 1, 2, 3, 4, 5].map((index) =>
              setTimeout(() => {
                setVisibleFrames((prev) => [...prev, index])
              }, index * 500)
            )
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60% 0px' // 画面上部40%の位置で判定（下から60%削除）
      }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
      // タイマーをクリーンアップ
      timersRef.current.forEach((timer) => clearTimeout(timer))
    }
  }, [])

  const frames = [
    { src: '/assets/4_manga/lemomanga1.png', alt: 'レモ漫画 1', zIndex: 2 },
    { src: '/assets/4_manga/lemomanga2-2.png', alt: 'レモ漫画 2', zIndex: 1 },
    { src: '/assets/4_manga/lemomanga3.png', alt: 'レモ漫画 3', zIndex: 3 },
    { src: '/assets/4_manga/lemomanga4.png', alt: 'レモ漫画 4', zIndex: 4 },
    { src: '/assets/4_manga/lemomanga5.png', alt: 'レモ漫画 5', zIndex: 5 },
    { src: '/assets/4_manga/lemomanga6.png', alt: 'レモ漫画 6', zIndex: 6 },
  ]

  return (
    <SpaceSectionWrapper className="pt-8 pb-0">
      {/* デバッグ用：判定ライン（画面上部40%の位置） */}
      {showDebugLine && (
        <div
          className="fixed top-[40%] left-0 w-full h-[2px] bg-red-500 z-[9999] pointer-events-none"
          style={{ boxShadow: '0 0 10px red' }}
        >
          <span className="absolute left-2 top-[-20px] text-red-500 text-xs bg-black px-2 py-1">
            判定ライン (40%)
          </span>
        </div>
      )}

      <div className="relative w-full text-responsive-xs">
        {/* 漫画画像コンテナ - 画像の実際のアスペクト比に合わせる (1640:1800) */}
        <div ref={sectionRef} className="relative w-full aspect-[1640/1800]">
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
                sizes="(max-width: 768px) 100vw, 768px"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </SpaceSectionWrapper>
  )
}