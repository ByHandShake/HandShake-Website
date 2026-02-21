import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        404
      </h1>
      <p className="mt-4 text-xl text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
        >
          Go Home
        </Link>
        <Link
          href="/features"
          className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors font-medium"
        >
          View Features
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors font-medium"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
