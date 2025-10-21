// Project LEMO定数

export const PROJECT_INFO = {
  title: 'Project:LEMO',
  subtitle: 'プロジェクトレモ',
  description: 'スマホ向けボードゲームアプリ',
  company: 'Spacian'
} as const

export const CROWDFUNDING_INFO = {
  startDate: '2025/11/22~',
  startDateForCalculation: '2025-11-22', // 日数計算用
  platform: 'Campfire',
  ctaText: 'クラウドファンディングスタート',
  lineUrl: 'https://lin.ee/fZ4tc18'
} as const

/**
 * クラウドファンディング開始までの残り日数を計算
 * @returns 残り日数（開始日当日は0、過去の場合は負の値）
 */
export function getDaysUntilCrowdfunding(): number {
  const today = new Date()
  today.setHours(0, 0, 0, 0) // 時刻をリセット

  const startDate = new Date(CROWDFUNDING_INFO.startDateForCalculation)
  startDate.setHours(0, 0, 0, 0)

  const diffTime = startDate.getTime() - today.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays
}

export const COLORS = {
  primary: '#ff23d0',
  secondary: '#e4027e',
  dark: '#13161b',
  darkSecondary: '#151515',
  newsBlue: '#4a4890',
  newsAccent: '#001b63',
  textGray: '#4f5665',
  white: '#ffffff'
} as const

export const LEMO_FEATURES = [
  'ピンクのアンテナ',
  'レモンのような頭',
  'やたらと"モ"という',
  '無害そうな表情',
  'イルカのような肌',
  'おそらくカナヅチ'
] as const

export const NEWS_CATEGORIES = [
  'トップ',
  '速報',
  'ライブ',
  'ランキング',
  '国内',
  '国際',
  '経済',
  'エンタメ',
  'スポーツ',
  'レモン'
] as const