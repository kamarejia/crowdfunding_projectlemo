'use client'

export default function TestSpace() {
  return (
    <div className="absolute inset-0 bg-black">
      {/* テスト用明るい星 */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-10 w-3 h-3 bg-[#FF23D0] rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-cyan-300 rounded-full animate-pulse"></div>

      {/* テスト用グラデーション */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FF23D0]/20 via-transparent to-transparent opacity-50"></div>

      {/* 回転する要素 */}
      <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-[#FF23D0]/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>

      <div className="absolute top-1/2 left-1/2 text-white text-sm -translate-x-1/2 -translate-y-1/2">
        背景テスト表示中
      </div>
    </div>
  )
}