export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md text-center p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <div className="w-16 h-16 mx-auto mb-4 bg-indigo-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          準備中
        </h1>

        <p className="text-gray-600 mb-6">
          新しいサービスを準備しています。<br />
          お楽しみに！
        </p>

        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Coming Soon...
        </p>
      </div>
    </main>
  )
}