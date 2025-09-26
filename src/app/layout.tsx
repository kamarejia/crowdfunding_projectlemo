import type { Metadata } from 'next'
import { Inter, Orbitron, M_PLUS_1 } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Project LEMO | プロジェクトレモ - クラウドファンディング',
  description: '宇宙からやってきたレモ星人をテーマにしたスマホ向けボードゲームアプリのクラウドファンディングプロジェクト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} ${orbitron.variable} ${mPlus1.variable}`}>{children}</body>
    </html>
  )
}