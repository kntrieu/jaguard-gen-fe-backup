import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LoadingProvider } from '../context/LoadingContext'

export const metadata: Metadata = {
  title: 'MyApp',
  description: 'My Next.js App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-slate-900 bg-gradient-to-b from-white to-purple-300">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto px-4 py-8" style={{ minWidth: '600px' }}>
          <LoadingProvider>
            {children}
          </LoadingProvider>
        </main>
        <Footer />
      </body>
    </html>
  )
}
