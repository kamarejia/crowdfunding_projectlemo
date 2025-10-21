import type { Metadata } from 'next'
import { Inter, Orbitron, M_PLUS_1, Righteous } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron'
})
const mPlus1 = M_PLUS_1({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800', '900'],
  variable: '--font-m-plus-1'
})
const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous'
})

// ローカルフォント設定（Kaisotai、Senobi Gothic）
const kaisotai = localFont({
  src: [
    {
      path: '../../public/fonts/Kaisotai-Next-UP-B.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-kaisotai',
  display: 'swap',
})

const senobiGothic = localFont({
  src: [
    {
      path: '../../public/fonts/Senobi-Gothic-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Senobi-Gothic-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Senobi-Gothic-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-senobi-gothic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Project LEMO | プロジェクトレモ - クラウドファンディング',
  description: '宇宙からやってきたレモ星人をテーマにしたスマホ向けボードゲームアプリ。世界中のボードゲームがオンラインで遊べる！2025年11月22日クラウドファンディング開始。',
  openGraph: {
    title: 'Project LEMO | プロジェクトレモ',
    description: '宇宙からやってきたレモ星人をテーマにしたスマホ向けボードゲームアプリ。世界中のボードゲームがオンラインで遊べる！',
    url: 'https://project-lemo-crowdfunding.vercel.app/',
    siteName: 'Project LEMO',
    images: [
      {
        url: '/assets/1_general/ogp-image-compressed.jpg',
        width: 1200,
        height: 630,
        alt: 'Project LEMO - 宇宙からやってきたレモ星人とボードゲームを楽しもう'
      }
    ],
    locale: 'ja_JP',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project LEMO | プロジェクトレモ',
    description: '宇宙からやってきたレモ星人をテーマにしたスマホ向けボードゲームアプリ。世界中のボードゲームがオンラインで遊べる！',
    images: ['/assets/1_general/ogp-image-compressed.jpg']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${orbitron.variable} ${mPlus1.variable} ${righteous.variable} ${kaisotai.variable} ${senobiGothic.variable}`}>
        <div className="max-w-mobile mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}