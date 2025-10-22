'use client'

import { useEffect, useRef } from 'react'
import { sendGAEvent } from '@next/third-parties/google'

/**
 * ScrollTracker - スクロール深度を計測
 * 各セクションが画面に表示されたタイミングでGoogle Analyticsにイベント送信
 */
export default function ScrollTracker() {
  const trackedSections = useRef<Set<string>>(new Set())

  useEffect(() => {
    const sections = [
      { id: 'hero', name: 'HeroSection' },
      { id: 'manga', name: 'MangaSection' },
      { id: 'lemo', name: 'LemoSection' },
      { id: 'system', name: 'SystemSection' },
      { id: 'interior', name: 'InteriorSection' },
      { id: 'founding', name: 'FoundingSection' }
    ]

    const observers: IntersectionObserver[] = []

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !trackedSections.current.has(section.id)) {
              // まだ計測していないセクションが表示されたらイベント送信
              sendGAEvent('event', 'scroll_depth', {
                value: section.name
              })
              trackedSections.current.add(section.id)
            }
          })
        },
        {
          threshold: 0.3 // セクションの30%が表示されたら計測
        }
      )

      // data-section属性でセクションを識別
      const element = document.querySelector(`[data-section="${section.id}"]`)
      if (element) {
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return null // このコンポーネントは何も表示しない
}
