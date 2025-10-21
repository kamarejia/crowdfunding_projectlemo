'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SpaceSectionWrapper from './SpaceSectionWrapper'
import { CROWDFUNDING_INFO, getDaysUntilCrowdfunding } from '@/lib/constants'

export default function FoundingSection() {
  const [badgeVisible, setBadgeVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const ctaRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  // クラファン開始前かどうかを判定
  const daysUntilCrowdfunding = getDaysUntilCrowdfunding()
  const isBeforeCrowdfunding = daysUntilCrowdfunding > 0

  // ページ最下部検知用のスクロールリスナー
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // ページの最下部から100px以内に到達したらアニメーション発動
      if (scrollTop + windowHeight >= documentHeight - 100) {
        if (!badgeVisible) {
          setTimeout(() => setBadgeVisible(true), 200)
        }
        if (!titleVisible) {
          setTimeout(() => setTitleVisible(true), 100)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [badgeVisible, titleVisible])

  // CTAブロック Observer（判定ライン + 最下部検知）
  useEffect(() => {
    const ctaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setBadgeVisible(true), 200)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60% 0px' // 画面上部40%の位置で判定
      }
    )

    if (ctaRef.current) {
      ctaObserver.observe(ctaRef.current)
    }

    return () => {
      if (ctaRef.current) {
        ctaObserver.unobserve(ctaRef.current)
      }
    }
  }, [])

  // タイトルブロック Observer（判定ライン + 最下部検知）
  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setTitleVisible(true), 100)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60% 0px' // 画面上部40%の位置で判定
      }
    )

    if (titleRef.current) {
      titleObserver.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current)
      }
    }
  }, [])

  return (
    <SpaceSectionWrapper className="py-16">
      <div className="max-w-mobile mx-auto text-responsive-xs">

        {/* タイトルブロック */}
        <div
          ref={titleRef}
          className="relative mb-8 flex flex-col items-center"
          style={{
            animation: titleVisible ? 'popIn 0.6s ease-out forwards' : 'none',
            opacity: titleVisible ? 1 : 0
          }}
        >
          {/* テキストコンテナ - 左詰め */}
          <div className="flex flex-col items-start">
            {/* クラファンプラットフォーム - 小さい字 */}
            <p className="font-kaisotai text-[min(4.48vw,19px)] text-white mb-0">
              クラファンプラットフォーム
            </p>

            {/* CAMPFIREにて支援者大募集！ */}
            <h2 className="font-kaisotai text-[min(8.5vw,37px)] text-white">
              CAMPFIREにて支援者大募集！
            </h2>
          </div>

          {/* 装飾画像 */}
          <div className="relative w-[95%] h-[min(3vw,13px)] mt-0">
            <Image
              src="/assets/8_founding/装飾.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* たきびモとテキストブロック */}
        <div className="relative h-[min(74.63vw,320px)] mb-2 ml-[min(7.46vw,32px)]">
          {/* たきびモ画像 - 1.2倍 */}
          <div className="absolute left-[min(4.98vw,21px)] top-[min(3.23vw,14px)] w-[min(75.82vw,326px)] h-[min(65.08vw,280px)] z-0">
            <Image
              src="/assets/8_founding/たきびモ.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* テキストブロック */}
          <div className="absolute left-[min(19.9vw,86px)] top-0 z-10">
            <p className="font-senobi-gothic font-bold text-[min(5.47vw,24px)] text-white whitespace-nowrap mb-4">
              まだまだ開発はほど遠いモ
            </p>
            <p className="font-senobi-gothic font-bold text-[min(5.47vw,24px)] text-white whitespace-nowrap ml-[min(14.68vw,63px)]">
              たきびレベルだモ...
            </p>
          </div>
        </div>

        {/* CTAボタン（HeroSectionのスタイルを参考） */}
        <div className="flex justify-center">
          <a
            ref={ctaRef}
            href={isBeforeCrowdfunding ? CROWDFUNDING_INFO.lineUrl : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[70%] max-w-[538px] cursor-pointer hover:scale-105 transition-transform duration-300 @container"
          >

            {/* 早期特典あり！バッジ - CTA1よりさらに上 */}
            <div
              className="absolute left-0 top-0 z-10"
              style={{
                animation: badgeVisible ? 'dropInBounceCTA2 0.8s ease-out forwards' : 'none',
                opacity: badgeVisible ? 1 : 0
              }}
            >
              <div>
                <p className="font-kaisotai text-[min(7.46vw,32px)] text-white whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  早期特典あり！
                </p>
              </div>
            </div>

            {/* ボタン背景（cta2.svg） */}
            <div className="relative w-full aspect-[280/110.356]">
              <Image
                src="/assets/8_founding/cta2.svg"
                alt=""
                fill
                className="object-contain"
              />

              {/* CTAテキスト + 矢印（クラファン前後で切り替え） */}
              <div className="absolute inset-0 flex items-center justify-center gap-[3%]">
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

      </div>
    </SpaceSectionWrapper>
  )
}
