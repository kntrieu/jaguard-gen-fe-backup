'use client'

import { createContext, useContext, useState } from 'react'

type LoadingContextType = {
  isLoading: boolean
  setLoading: (state: boolean) => void
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setLoading: () => {},
})

export const useLoading = () => useContext(LoadingContext)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}

      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4 text-center text-white">
          <img
            src="/jaguar1.gif"
            alt="Loading..."
            className="w-48 h-48 object-contain"
          />
          <p className="text-lg font-semibold tracking-wide">
            The Jaguar is hunting...
          </p>
        </div>
      )}
    </LoadingContext.Provider>
  )
}
