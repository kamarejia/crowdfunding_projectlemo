'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SpaceSectionWrapper from './SpaceSectionWrapper'

export default function SystemSection() {
  // タイトルブロック
  const [bounceVisible, setBounceVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)

  // ワイワイブロック
  const [waiwaiTextVisible, setWaiwaiTextVisible] = useState(false)
  const [playmoVisible, setPlaymoVisible] = useState(false)
  const waiwaiRef = useRef<HTMLDivElement>(null)

  // モードブロック
  const [mode1Visible, setMode1Visible] = useState(false)
  const [mode2Visible, setMode2Visible] = useState(false)
  const [mode3Visible, setMode3Visible] = useState(false)
  const [modeTextVisible, setModeTextVisible] = useState(false)
  const modeRef = useRef<HTMLDivElement>(null)

  // ゲームブロック
  const [gameVisible, setGameVisible] = useState(false)
  const gameRef = useRef<HTMLDivElement>(null)

  // タイトルブロック Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setBounceVisible(true), 300)
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

  // ワイワイブロック Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setWaiwaiTextVisible(true), 300)
            setTimeout(() => setPlaymoVisible(true), 700)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60% 0px' // 画面上部40%の位置で判定
      }
    )

    if (waiwaiRef.current) {
      observer.observe(waiwaiRef.current)
    }

    return () => {
      if (waiwaiRef.current) {
        observer.unobserve(waiwaiRef.current)
      }
    }
  }, [])

  // モードブロック Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setMode1Visible(true), 200)
            setTimeout(() => setMode2Visible(true), 400)
            setTimeout(() => setMode3Visible(true), 600)
            setTimeout(() => setModeTextVisible(true), 1000)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60% 0px' // 画面上部40%の位置で判定
      }
    )

    if (modeRef.current) {
      observer.observe(modeRef.current)
    }

    return () => {
      if (modeRef.current) {
        observer.unobserve(modeRef.current)
      }
    }
  }, [])

  // ゲームブロック Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setGameVisible(true), 300)
          }
        })
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -60% 0px' // 画面上部40%の位置で判定
      }
    )

    if (gameRef.current) {
      observer.observe(gameRef.current)
    }

    return () => {
      if (gameRef.current) {
        observer.unobserve(gameRef.current)
      }
    }
  }, [])

  return (
    <SpaceSectionWrapper className="py-16">
      <div className="relative w-full max-w-mobile mx-auto text-responsive-xs">

        {/* タイトルブロック */}
        <div ref={titleRef} className="relative mb-12">
          {/* Project:LEMOをのぞく + 装飾ライン（ベース構造） */}
          <div>
            <p className="font-senobi-gothic font-bold text-white text-[min(10.45vw,45px)] tracking-[max(-1.36vw,-6px)] whitespace-nowrap">
              Project:LEMO
              <span className="text-[min(9.45vw,41px)] tracking-[max(-1.23vw,-5px)] ml-1">をのぞく</span>
            </p>

            {/* 見出し装飾 */}
            <div className="relative w-[95%] h-[9px] mt-2">
              <Image
                src="/assets/6_system/見出し装飾.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* なにができるの？ - 絶対配置、回転、バウンスアニメーション */}
          <div
            className="absolute top-[-34px] left-0"
            style={{
              transform: 'rotate(-4.912deg)',
              animation: bounceVisible ? 'bounceDown 1.2s ease-out forwards' : 'none',
              opacity: bounceVisible ? 1 : 0
            }}
          >
            <p className="font-senobi-gothic font-bold text-[#f628d9] text-[min(6.22vw,27px)] tracking-[max(-0.81vw,-3px)] whitespace-nowrap">
              なにができるの？
            </p>
          </div>
        </div>

        {/* ワイワイブロック */}
        <div ref={waiwaiRef} className="relative w-full max-w-[min(119.15vw,512px)] mx-auto">
          {/* ロビー背景画像 */}
          <div className="relative w-full h-[min(82.84vw,356px)]">
            <Image
              src="/assets/6_system/ロビー.png"
              alt="ロビー"
              fill
              className="object-cover"
              priority
            />

            {/* テキストオーバーレイ - 左からスライド */}
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                animation: waiwaiTextVisible ? 'slideInLeft 0.8s ease-out forwards' : 'none',
                opacity: waiwaiTextVisible ? 1 : 0
              }}
            >
              {/* レモになってあつまって - 大見出し */}
              <div className="relative mt-[14px]">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[rgba(0,193,220,0.4)] rounded-[min(0.5vw,2px)]" />
                  <p className="relative font-senobi-gothic font-bold text-white text-[min(9.95vw,43px)] tracking-[max(-2.39vw,-10px)] px-3 py-2 leading-[1.2]">
                    レモになってあつまって
                  </p>
                </div>
              </div>

              {/* 説明テキスト */}
              <div className="relative">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-[rgba(0,193,220,0.4)] rounded-[min(0.5vw,2px)]" />
                  <div className="relative font-senobi-gothic font-medium text-white text-[min(4.48vw,19px)] tracking-[max(-1.07vw,-5px)] px-3 py-2">
                    <p className="mb-0">マルチプレイでわいわい</p>
                    <p>もちろんひとりでも</p>
                  </div>
                </div>
              </div>
            </div>

            {/* プレイモ画像 - ロビー画像に対して絶対配置、下から出現 */}
            <div
              className="absolute bottom-[max(-18.66vw,-80px)] left-[min(27.36vw,118px)] w-[min(72.64vw,312px)] h-[min(51.74vw,222px)]"
              style={{
                animation: playmoVisible ? 'slideUpFade 0.8s ease-out forwards' : 'none',
                opacity: playmoVisible ? 1 : 0
              }}
            >
              <Image
                src="/assets/6_system/プレイモ.png"
                alt="プレイモ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* レモニア画像 - モードブロック左側背景 */}
        <div className="absolute top-[min(174.13vw,749px)] left-[max(-30vw,-129px)] w-[min(110vw,473px)] h-[min(110vw,473px)] pointer-events-none overflow-visible z-0">
          <div className="relative w-full h-full">
            <Image
              src="/assets/2_background/レモニア.png"
              alt=""
              fill
              className="object-contain opacity-90"
            />
          </div>
        </div>

        {/* モードブロック */}
        <div ref={modeRef} className="relative w-full mt-[130px] z-10">
          {/* 3つのゲームモード画像 - 中央揃え、左から順に出現 */}
          <div className="flex justify-center items-start gap-[2px] w-full mb-8">
            {/* SOLO */}
            <div
              className="relative flex-1 max-w-[min(49.75vw,214px)] aspect-[128.5/233.44]"
              style={{
                animation: mode1Visible ? 'slideInLeft 0.6s ease-out forwards' : 'none',
                opacity: mode1Visible ? 1 : 0
              }}
            >
              <Image
                src="/assets/6_system/gamemode_solo_2.png"
                alt="ソロモード"
                fill
                className="object-cover"
              />
            </div>

            {/* OPEN */}
            <div
              className="relative flex-1 max-w-[min(49.75vw,214px)] aspect-[128.5/233.44]"
              style={{
                animation: mode2Visible ? 'slideInLeft 0.6s ease-out forwards' : 'none',
                opacity: mode2Visible ? 1 : 0
              }}
            >
              <Image
                src="/assets/6_system/gamemode_open_2.png"
                alt="オープンモード"
                fill
                className="object-cover"
              />
            </div>

            {/* PRIVATE */}
            <div
              className="relative flex-1 max-w-[min(50.99vw,219px)] aspect-[132.7/233.46]"
              style={{
                animation: mode3Visible ? 'slideInLeft 0.6s ease-out forwards' : 'none',
                opacity: mode3Visible ? 1 : 0
              }}
            >
              <Image
                src="/assets/6_system/gamemode_private_2.png"
                alt="プライベートモード"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* モードテキストブロック - 左からスライド */}
          <div
            className="relative w-full max-w-[min(82.09vw,353px)]"
            style={{
              animation: modeTextVisible ? 'slideInLeft 0.8s ease-out forwards' : 'none',
              opacity: modeTextVisible ? 1 : 0
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[rgba(109,0,112,0.54)] rounded-[min(1vw,4px)]" />
              <div className="relative px-3 py-2">
                <p className="font-senobi-gothic font-bold text-white text-[min(8.5vw,37px)] tracking-[max(-2.09vw,-9px)] mb-2">
                  アソビにあわせた3モード
                </p>
                <div className="font-senobi-gothic font-medium text-white text-[min(4.48vw,19px)] tracking-[max(-1.07vw,-5px)]">
                  <p className="mb-0">真剣勝負ものんびりプレイも</p>
                  <p>気分にあわせて</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ゲームブロック - ジョジョにフェードイン */}
        <div ref={gameRef} className="relative w-full mt-[75px]">
          <div
            className="relative w-full"
            style={{
              animation: gameVisible ? 'fadeInSlow 1.5s ease-out forwards' : 'none',
              opacity: gameVisible ? 1 : 0
            }}
          >
            {/* ニムト画面 - 回転 */}
            <div className="relative w-full h-[min(54.73vw,235px)] mb-[max(-37.31vw,-160px)]">
              <div
                className="absolute left-1/2 top-0 -translate-x-1/2 w-[min(99.5vw,428px)] h-[min(53.98vw,232px)]"
                style={{ transform: 'translateX(-50%) rotate(-5.237deg)' }}
              >
                <Image
                  src="/assets/6_system/ニムト画面.png"
                  alt="ニムト画面"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* レモ&ゲームアイコンブロック */}
            <div className="relative w-full h-[min(50vw,215px)]">
              {/* キラレモ - 中央やや右 */}
              <div className="absolute left-[min(50.25vw,216px)] top-0 w-[min(42.79vw,184px)] h-[min(54.98vw,236px)]">
                <Image
                  src="/assets/6_system/キラレモ.png"
                  alt="キラレモ"
                  fill
                  className="object-contain"
                />
              </div>

              {/* ゲームアイコン群 - 絶対配置 + ふわふわアニメーション */}
              <div className="absolute left-[min(14.18vw,61px)] top-[min(29.35vw,126px)] w-[min(12.44vw,53px)] h-[min(13.43vw,58px)] animate-float" style={{ animationDelay: '0s' }}>
                <Image src="/assets/6_system/games/lemo.png" alt="" fill className="object-contain" />
              </div>
              <div className="absolute left-0 top-[min(36.07vw,155px)] w-[min(14.18vw,61px)] h-[min(16.92vw,73px)] animate-float" style={{ animationDelay: '0.5s' }}>
                <Image src="/assets/6_system/games/suppai.png" alt="" fill className="object-contain" />
              </div>
              <div className="absolute left-[min(28.86vw,124px)] top-[min(33.83vw,145px)] w-[min(15.17vw,65px)] h-[min(17.91vw,77px)] animate-float" style={{ animationDelay: '1s' }}>
                <Image src="/assets/6_system/games/peace.png" alt="" fill className="object-contain" />
              </div>
              <div className="absolute left-[min(46.27vw,199px)] top-[min(31.34vw,135px)] w-[min(10.7vw,46px)] h-[min(10.95vw,47px)] animate-float" style={{ animationDelay: '1.5s' }}>
                <Image src="/assets/6_system/games/L.png" alt="" fill className="object-contain" />
              </div>
              <div className="absolute left-[min(55.22vw,237px)] top-[min(39.8vw,171px)] w-[min(10.95vw,47px)] h-[min(13.68vw,59px)] animate-float" style={{ animationDelay: '2s' }}>
                <Image src="/assets/6_system/games/inthebox.png" alt="" fill className="object-contain" />
              </div>
              <div className="absolute left-[min(83.58vw,359px)] top-[min(33.08vw,142px)] w-[min(16.42vw,71px)] h-[min(17.66vw,76px)] animate-float" style={{ animationDelay: '2.5s' }}>
                <Image src="/assets/6_system/games/momo.png" alt="" fill className="object-contain" />
              </div>
            </div>

            {/* テキストブロック */}
            <div className="relative w-full max-w-[min(92.04vw,396px)] mx-auto mt-[min(2.49vw,11px)]">
              <div className="relative">
                <div className="absolute inset-0 bg-[rgba(154,66,28,0.8)] rounded-[min(1vw,4px)]" />
                <div className="relative px-3 py-3">
                  <p className="font-senobi-gothic font-bold text-white text-[min(8.3vw,36px)] tracking-[max(-1.31vw,-6px)] mb-2">
                    ゲームぞくぞく開発予定！
                  </p>
                  <div className="font-senobi-gothic font-medium text-white text-[min(4.48vw,19px)] tracking-[max(-1.07vw,-5px)]">
                    <p className="mb-0">世界中のボードゲームをぞくぞくリリース！</p>
                    <p>あのゲームもこのゲームもレモと一緒に！</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SpaceSectionWrapper>
  )
}
