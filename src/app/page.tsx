'use client'

import { useRouter } from 'next/navigation';
import { RocketIcon, InfoIcon } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  return (
    <div className="text-slate-900 flex flex-col items-center justify-center px-4 text-center py-7" style={{ marginTop: '170px' }}>
      <h1 className="text-5xl font-encode font-extrabold mb-4 tracking-tight">
        JaguarGen
      </h1>
      <p className="text-lg max-w-xl mb-8 font-manrope text-slate-700">
        This is an AI-Powered Proposal Generator - Instantly generate high-quality business proposals using cutting-edge large language models (LLMs). Save time, impress clients, and focus on what matters most.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => router.push('/generate')}
          className="bg-purple-600 hover:bg-purple-500 text-white font-manrope px-6 py-3 rounded-md text-base shadow-md transition flex items-center gap-2"
        >
          <RocketIcon className="w-5 h-5" />
          Start Generating
        </button>

        <button
          onClick={() => router.push('/about')}
          className="bg-white hover:bg-purple-100 text-purple-700 font-manrope px-6 py-3 rounded-md text-base border border-purple-300 shadow-sm transition flex items-center gap-2"
        >
          <InfoIcon className="w-5 h-5" />
          Learn More
        </button>
      </div>
    </div>
  )
}
