import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-purple-500 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/JaguarGen_Logo.svg" alt="Logo" width={150} height={50} className="text-purple-600 fill-current" />
        </Link>

        <nav className="space-x-4">
          <Link href="/generate" className="hover:underline">Generate</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </nav>
      </div>
    </header>
  )
}