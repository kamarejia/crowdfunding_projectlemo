'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function WarningSection() {
  const [currentFrame, setCurrentFrame] = useState(1)

  // レモのアニメーションループ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev >= 5 ? 1 : prev + 1))
    }, 300) // 0.3秒間隔でフレーム切り替え（速度アップ）

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[560px] overflow-hidden">
      {/* メインコンテンツコンテナ - レスポンシブ */}
      <div className="relative max-w-mobile mx-auto h-full">
      {/* トップの警告アニメーション */}
      <div className="absolute top-0 left-0 w-full h-[46px] overflow-hidden">
        {/* 警告画像のループアニメーション - 複数枚を連結 */}
        <div className="absolute top-0 left-0 h-full flex animate-scroll-right">
          {Array.from({ length: 6 }, (_, i) => (
            <Image
              key={i}
              src="/assets/images/warninganimation.png"
              alt="Warning Animation"
              width={1503}
              height={138}
              className="h-full w-auto object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* WARNING テキスト */}
        <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 bg-[#121b26] px-6 py-2 rounded flex items-center justify-center">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/icons/warning_icon.png"
              alt="Warning Icon"
              width={40}
              height={40}
              className="animate-pulse"
            />
            <span className="font-orbitron font-bold text-[#e4027e] text-[25px] tracking-wider animate-pulse">
              WARNING
            </span>
            <Image
              src="/assets/icons/warning_icon.png"
              alt="Warning Icon"
              width={40}
              height={40}
              className="animate-pulse"
            />
          </div>
        </div>
      </div>

      {/* 中央のレモとテキスト */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* LEMO テキスト */}
        <div className="text-[#e4027e] text-[22px] font-orbitron tracking-[3.74px] mb-4">
          LEMO
        </div>

        {/* レモのアニメーション */}
        <div className="relative w-[210px] h-[210px] mb-6">
          <Image
            src={`/assets/images/lemo_animation/${currentFrame}.png`}
            alt="レモ星人"
            fill
            className="object-contain"
            sizes="210px"
            priority
          />
        </div>

        {/* メインタイトル */}
        <div className="text-[#e4027e] text-[25px] font-mplus1 text-center mb-8">
          レモ星人地球へ到来
        </div>

        {/* 特徴説明（吹き出し風） */}
        <div className="absolute top-[71px] left-[38px]">
          <div className="bg-[#e4027e] px-3 py-1 text-white text-[13px] font-mplus1 rounded">
            ピンクのアンテナ
          </div>
          <div className="text-[#e4027e] text-[10px] font-mplus1 mt-2 max-w-[100px]">
            <p>ときおり動いている</p>
            <p>何かを察知している？</p>
          </div>
        </div>

        <div className="absolute top-[71px] right-[33px]">
          <div className="bg-[#e4027e] px-3 py-1 text-white text-[13px] font-mplus1 rounded">
            レモンのような頭
          </div>
          <div className="text-[#e4027e] text-[10px] font-mplus1 mt-2 max-w-[125px]">
            <p>その見た目から</p>
            <p>NYASAの学者がLEMOと命名。</p>
          </div>
        </div>

        <div className="absolute top-[215px] left-[19px]">
          <div className="bg-[#e4027e] px-3 py-1 text-white text-[13px] font-mplus1 rounded">
            やたらと&quot;モ&quot;という
          </div>
          <div className="text-[#e4027e] text-[10px] font-mplus1 mt-2 max-w-[120px]">
            <p>口はあまり動いていないが</p>
            <p>言語をはなす個体モ。</p>
          </div>
        </div>

        <div className="absolute top-[202px] right-[30px]">
          <div className="bg-[#e4027e] px-3 py-1 text-white text-[13px] font-mplus1 rounded">
            無害そうな表情
          </div>
          <div className="text-[#e4027e] text-[10px] font-mplus1 mt-2">
            人類に敵意はあるのか...?
          </div>
        </div>

        <div className="absolute bottom-[223px] left-[18px]">
          <div className="bg-[#e4027e] px-3 py-1 text-white text-[13px] font-mplus1 rounded">
            イルカのような肌
          </div>
          <div className="text-[#e4027e] text-[10px] font-mplus1 mt-2 max-w-[100px]">
            <p>溺れている事例あり。</p>
            <p>おそらくカナヅチ。</p>
          </div>
        </div>
      </div>

      {/* ボトムの警告アニメーション */}
      <div className="absolute bottom-0 left-0 w-full h-[46px] overflow-hidden">
        {/* 警告画像のループアニメーション（逆方向） - 複数枚を連結 */}
        <div className="absolute top-0 left-0 h-full flex animate-scroll-left">
          {Array.from({ length: 6 }, (_, i) => (
            <Image
              key={i}
              src="/assets/images/warninganimation.png"
              alt="Warning Animation"
              width={1503}
              height={138}
              className="h-full w-auto object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* ALIENS HAVE ARRIVED テキスト */}
        <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 bg-[#121b26] px-4 py-2 rounded flex items-center justify-center">
          <span className="font-orbitron font-bold text-[#e4027e] text-[15px] tracking-wider animate-pulse whitespace-nowrap">
            ALIENS HAVE ARRIVED
          </span>
        </div>
      </div>
      </div>
    </section>
  )
}