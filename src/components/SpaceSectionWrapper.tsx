import { ReactNode } from 'react'

interface SpaceSectionWrapperProps {
  children: ReactNode
  className?: string
  containerClassName?: string
}

/**
 * セクションの共通ラッパーコンポーネント
 * 最大幅: 768px (max-w-mobile)
 * 背景: GlobalSpaceBackgroundを使用（個別背景なし）
 */
export default function SpaceSectionWrapper({
  children,
  className = '',
  containerClassName = ''
}: SpaceSectionWrapperProps) {
  return (
    <section className={`relative overflow-hidden`}>
      {/* paddingを含むラッパー */}
      <div className={className}>
        {/* スマホ最大幅コンテナ */}
        <div className={`relative max-w-mobile mx-auto ${containerClassName}`}>
          {children}
        </div>
      </div>
    </section>
  )
}