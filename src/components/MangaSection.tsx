'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import SpaceSectionWrapper from './SpaceSectionWrapper'

export default function MangaSection() {
  const [visibleFrames, setVisibleFrames] = useState<number[]>([])
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
            // 各コマを順番に表示（1.2秒間隔に短縮）
            timersRef.current = [0, 1, 2, 3, 4, 5].map((index) =>
              setTimeout(() => {
                setVisibleFrames((prev) => [...prev, index])
              }, index * 1200)
            )
          }
        })
      },
      { threshold: 0.2 } // 20%表示されたらトリガー
    )

    observer.observe(currentRef)

    return () => {
      observer.unobserve(currentRef)
      observer.disconnect()
      // タイマーをクリーンアップ
      timersRef.current.forEach((timer) => clearTimeout(timer))
    }
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
    <SpaceSectionWrapper className="py-32">
      {/* 上部フェードグラデーション（Hero→Manga徐々に遷移） - 透明度を薄く */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#13161b] via-[#13161b]/30 to-transparent pointer-events-none z-10" />

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
            />
          </div>
        ))}
      </div>

      {/* 下部フェードグラデーション（Manga→Warning徐々に遷移） - 透明度を薄く */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#13161b] via-[#13161b]/30 to-transparent pointer-events-none z-10" />
    </SpaceSectionWrapper>
  )
}