'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import CurtainBlock from './CurtainBlock'
import { CROWDFUNDING_INFO, getDaysUntilCrowdfunding } from '@/lib/constants'
import { sendGAEvent } from '@next/third-parties/google'

/**
 * HeroSection - スクロール連動カーテンアニメーション
 *
 * 構造:
 * - 背景（hero_back）: 常に表示（z-0）
 * - 宇宙船+CTA: 常に表示（z-10）
 * - 離れていても & ファンディング: 幕が上がるとフェードイン（z-20）
 * - 幕（CurtainBlock）: スクロールで上昇（z-50, fixed）
 *
 * フェーズ:
 * 1. 'idle': 初期状態、幕が画面を覆っている
 * 2. 'rising': 幕が上昇中（virtualScrollで制御）
 * 3. 'lifted': 幕が完全に上昇、コンテンツフェードイン
 * 4. 'complete': アニメーション完了、通常スクロールへ
 */

type AnimationPhase = 'idle' | 'rising' | 'lifted' | 'complete'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLAnchorElement>(null)

  // 定数
  const SCROLL_THRESHOLD = 600 // 幕が上がりきる閾値
  const AUTO_RISE_TRIGGER = 100 // 自動上昇のトリガー閾値
  const AUTO_RISE_DURATION = 600 // 自動上昇のアニメーション時間(ms)

  const [phase, setPhase] = useState<AnimationPhase>('idle')
  const [virtualScroll, setVirtualScroll] = useState(0)
  const [badgeVisible, setBadgeVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  // クラファン開始前かどうかを判定
  const daysUntilCrowdfunding = getDaysUntilCrowdfunding()
  const isBeforeCrowdfunding = daysUntilCrowdfunding > 0

  // マウント時にスクロール位置を確認して初期状態を決定
  useEffect(() => {
    setMounted(true)

    // ページトップ以外（100px超）でマウントされたら幕をスキップ
    // HeroSectionはページトップにあるため、下部でリロード = HeroSection通過済み
    if (window.scrollY > 100) {
      setPhase('complete')
      setVirtualScroll(SCROLL_THRESHOLD)
    }

    // 旧ロジック（スマホで動作しないため廃止）
    // requestAnimationFrame(() => {
    //   requestAnimationFrame(() => {
    //     // スクロール位置が600px以上なら幕をスキップ
    //     if (window.scrollY > 600) {
    //       setPhase('complete')
    //       setVirtualScroll(SCROLL_THRESHOLD)
    //     }
    //   })
    // })
  }, [])

  // CTAバッジ用IntersectionObserver（アニメーション完了後のみ）
  useEffect(() => {
    if (phase !== 'complete') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setBadgeVisible(true), 200)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60% 0px'
      }
    )

    if (ctaRef.current) {
      observer.observe(ctaRef.current)
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current)
      }
    }
  }, [phase])

  // スクロールロック＆仮想スクロール制御
  useEffect(() => {
    if (phase === 'complete') return

    // ページスクロールをロック
    const originalOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    let touchStartY = 0

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (phase === 'idle' && Math.abs(e.deltaY) >= AUTO_RISE_TRIGGER) {
        // 閾値以上のスクロールで自動上昇開始
        setPhase('rising')
        setVirtualScroll(AUTO_RISE_TRIGGER)
      } else if (phase === 'rising') {
        // rising中はスクロールを無効化（自動アニメーション中）
        return
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()

      const touchY = e.touches[0].clientY
      const deltaY = Math.abs(touchStartY - touchY)

      if (phase === 'idle' && deltaY >= AUTO_RISE_TRIGGER) {
        // 閾値以上のスワイプで自動上昇開始
        setPhase('rising')
        setVirtualScroll(AUTO_RISE_TRIGGER)
      } else if (phase === 'rising') {
        // rising中はタッチを無効化（自動アニメーション中）
        return
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      document.documentElement.style.overflow = originalOverflow
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [phase, SCROLL_THRESHOLD])

  // 自動上昇アニメーション
  useEffect(() => {
    if (phase === 'rising' && virtualScroll < SCROLL_THRESHOLD) {
      // 自動で幕を上昇させる
      const startTime = Date.now()
      const startScroll = virtualScroll
      const distance = SCROLL_THRESHOLD - startScroll

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / AUTO_RISE_DURATION, 1)

        // easeOutCubic イージング
        const easeProgress = 1 - Math.pow(1 - progress, 3)
        const newScroll = startScroll + distance * easeProgress

        setVirtualScroll(newScroll)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [phase, SCROLL_THRESHOLD, AUTO_RISE_DURATION])

  // 仮想スクロール量に応じた段階遷移
  useEffect(() => {
    if (phase === 'rising' && virtualScroll >= SCROLL_THRESHOLD) {
      // 幕が上がりきった
      setPhase('lifted')

      // フェードインアニメーション完了後（0.6s delay + 0.8s animation + 50ms buffer）
      setTimeout(() => {
        setPhase('complete')
        window.scrollTo(0, 0)
      }, 1450)
    }
  }, [phase, virtualScroll, SCROLL_THRESHOLD])

  // コンテンツの表示制御
  const contentVisible = phase === 'lifted' || phase === 'complete'

  // 幕の進行度に応じたオーバーレイの透明度（0〜0.25）
  const overlayOpacity = phase === 'idle'
    ? 0.25
    : phase === 'rising'
      ? Math.max(0, 0.25 - (virtualScroll / SCROLL_THRESHOLD) * 0.25)
      : 0

  return (
    <section ref={sectionRef} className="relative w-full bg-black overflow-visible z-10">
      <div className="relative w-full max-w-mobile mx-auto">

        {/* === 背景レイヤー (z-0) - 常に表示 === */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none z-0">
          <Image
            src="/assets/3_hero/hero_back.png"
            alt=""
            width={1640}
            height={4463}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* === コンテンツブロック === */}

        {/* 離れていてもブロック (z-20) - フェードイン */}
        <div
          className="relative w-full pt-[min(11.63vw,50px)] z-20"
          style={{
            animation: contentVisible ? 'fadeInSlow 0.8s ease-out forwards' : 'none',
            opacity: 0,
            willChange: 'opacity'
          }}
        >
          <div className="relative pl-[min(6.74vw,29px)]">
            {/* テキストブロック */}
            <div className="relative font-senobi-gothic font-bold text-white text-[min(5.35vw,23px)] leading-[min(8.6vw,37px)]">
              <p>はなれていても</p>
              <p>ひとりでも</p>
              <p>世界のいろいろな</p>
              <p>
                <span className="text-[#f461d3] text-[min(6.28vw,27px)] tracking-[-0.075em]">ボードゲーム</span>
                <span>が</span>
              </p>
              <p>オンラインで遊べる</p>

              {/* くたれもキャラクター - テキストブロック基準の絶対配置 */}
              <div className="absolute left-[min(41.86vw,180px)] top-[min(-2.79vw,-12px)] w-[min(47.44vw,204px)] h-[min(45.35vw,195px)]">
                <Image
                  src="/assets/3_hero/くたれも.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ファンディングスタートブロック (z-20) - フェードイン */}
        <div
          className="relative w-full pt-[min(20vw,86px)] z-20"
          style={{
            animation: contentVisible ? 'fadeInSlow 0.8s ease-out 0.6s forwards' : 'none',
            opacity: 0,
            willChange: 'opacity'
          }}
        >
          {/* キャンプファイアースタート画像 - 画面幅100% */}
          <div className="relative w-full">
            <Image
              src="/assets/3_hero/キャンプファイアースタート.png"
              alt="CAMPFIRE Founding Start"
              width={430}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* 宇宙船ブロック (z-50) - 常に表示、オーバーレイより上 */}
        <div className="relative w-full h-[min(65.81vw,283px)] z-50 mt-[min(20vw,86px)]">
          <Image
            src="/assets/3_hero/宇宙船.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        {/* CTAブロック (z-50) - 常に表示、オーバーレイより上 */}
        <div className="relative w-full pt-[min(6.98vw,30px)] pb-[min(14.93vw,64px)] flex justify-center z-50">
          <a
            ref={ctaRef}
            href={isBeforeCrowdfunding ? CROWDFUNDING_INFO.lineUrl : '#'}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sendGAEvent('event', 'line_register_click', { button_location: 'hero_section' })}
            className="relative w-[70%] max-w-[538px] cursor-pointer hover:scale-105 transition-transform duration-300 @container"
          >

            {/* 早期特典あり！バッジ */}
            <div
              className="absolute left-0 top-0 z-10"
              style={{
                animation: badgeVisible ? 'dropInBounceCTA1 0.8s ease-out forwards' : 'none',
                opacity: badgeVisible ? 1 : 0
              }}
            >
              <div>
                <p className="font-kaisotai text-[min(7.46vw,32px)] text-white whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  早期特典あり！
                </p>
              </div>
            </div>

            {/* ボタン背景（SVG） */}
            <div className="relative w-full aspect-[280/110.356]">
              <Image
                src="/assets/3_hero/cta1.svg"
                alt=""
                fill
                className="object-contain"
              />

              {/* CTAテキスト + 矢印（クラファン前後で切り替え） */}
              <div className="absolute inset-0 flex items-center justify-center gap-[3%] translate-y-[10%]">
                <p className="font-kaisotai text-[min(8.21vw,35px)] text-white whitespace-nowrap">
                  {isBeforeCrowdfunding ? '最新情報を受け取る' : 'いますぐ支援する'}
                </p>
                <div className="relative @[400px]:w-[30px] @[300px]:w-[26px] @[200px]:w-[23px] w-[20px] aspect-[23/16]">
                  <Image
                    src="/assets/3_hero/矢印.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* 下部スペース */}
        <div className="h-[min(14.93vw,64px)]" />

      </div>

      {/* === 暗めのオーバーレイ (z-40) - 幕が上がるにつれて消える === */}
      {phase !== 'complete' && (
        <div
          className="fixed inset-0 bg-black pointer-events-none z-40"
          style={{
            opacity: overlayOpacity,
            willChange: 'opacity'
          }}
        />
      )}

      {/* === 幕ブロック (z-60, fixed) - スクロールで上昇 === */}
      {phase !== 'complete' && (
        <div style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.05s' }}>
          <CurtainBlock translateY={virtualScroll} />
        </div>
      )}
    </section>
  )
}
