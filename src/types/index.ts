// Project LEMO型定義

export interface LEMOCharacter {
  id: string
  name: string
  imageUrl: string
  description: string
  features: string[]
}

export interface CrowdfundingInfo {
  startDate: string
  platform: string
  targetAmount?: number
  currentAmount?: number
  backers?: number
}

export interface NewsArticle {
  id: string
  title: string
  content: string
  publishedAt: string
  imageUrl?: string
  category: 'breaking' | 'domestic' | 'international' | 'entertainment' | 'lemon'
}

export interface ProjectInfo {
  title: string
  subtitle: string
  description: string
  crowdfunding: CrowdfundingInfo
}