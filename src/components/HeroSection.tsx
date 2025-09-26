'use client'

import Image from 'next/image'
import { PROJECT_INFO, CROWDFUNDING_INFO } from '@/lib/constants'
import SpaceBackground from './SpaceBackground'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 宇宙背景シェーダー */}
      <SpaceBackground />

      {/* メインコンテンツコンテナ (スマホ中心、PC中央配置) - 背景透明化 */}
      <div className="relative max-w-mobile mx-auto min-h-screen flex flex-col md:shadow-[0_0_0_50vw_#13161b]">

        {/* セーフエリア - 半透明化 */}
        <div className="h-[59px] bg-lemo-dark-secondary/70 backdrop-blur-[0.5px]" />

        {/* ヘッダーロゴ */}
        <div className="absolute top-[26px] left-[18px] z-20">
          <a
            href="https://spacian.jp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src="/assets/logos/spacian_logo_square.svg"
              alt="Spacianロゴ"
              width={27}
              height={27}
              className="object-contain"
              priority
            />
            <span className="font-orbitron font-medium text-lemo-primary text-[18px] leading-none">
              Spacian
            </span>
          </a>
        </div>

        {/* キービジュアル */}
        <div className="relative h-[335px] mt-[47px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-lemo-dark/20 z-10" />
          <Image
            src="/assets/images/キービジュアル切り抜き.png"
            alt="Project LEMO キービジュアル"
            fill
            className="object-cover object-[20%_center]"
            priority
          />
        </div>

        {/* プロジェクト情報 */}
        <div className="flex-1 flex flex-col justify-center px-6 pb-[102px] bg-gradient-to-b from-transparent via-black/15 to-black/25 backdrop-blur-[0.5px]">

          {/* タイトルグループ - 右寄せ */}
          <div className="text-right mb-[40px]">
            {/* カテゴリ */}
            <div className="text-[#FF23D0] text-[15px] font-mplus1 font-medium mb-[8px]">
              {PROJECT_INFO.description}
            </div>

            {/* メインタイトル */}
            <h1 className="text-[#FF23D0] text-[36px] font-orbitron font-bold leading-[0.9] mb-[4px]">
              {PROJECT_INFO.title}
            </h1>

            {/* サブタイトル */}
            <div className="text-[#FF23D0] text-[18px] font-mplus1 font-medium leading-[1.1]">
              {PROJECT_INFO.subtitle}
            </div>
          </div>

          {/* クラウドファンディング情報 */}
          <div className="text-center mb-[40px]">
            <div className="text-white text-[18px] font-orbitron leading-[34px] whitespace-pre-line">
              {`Date:${CROWDFUNDING_INFO.startDate}\nPlace:${CROWDFUNDING_INFO.platform}`}
            </div>
          </div>

          {/* CTAボタン - 目立つデザイン */}
          <div className="flex justify-center">
            <button className="relative w-full max-w-[312px] h-[62px] bg-[#FF23D0] text-white text-[20px] font-orbitron font-normal hover:bg-lemo-secondary transition-all duration-300 flex items-center justify-center leading-[34px] border-2 border-[#FF23D0] hover:border-white group overflow-hidden">
              {/* 光るエフェクト */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">{CROWDFUNDING_INFO.ctaText}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}