import './globals.css';
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DARB Professionals',
  description: 'Expert training and AI-powered learning for data professionals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="border-b bg-white">
            <div className="container mx-auto px-4">
              <nav className="flex h-16 items-center justify-between">
                <Link 
                  href="/" 
                  className="text-xl font-bold text-gray-900 no-underline hover:text-gray-700"
                >
                  DARB Pro
                </Link>
                <div className="hidden md:flex items-center space-x-7">
                  <Link 
                    href="/" 
                    className="text-sm font-medium text-gray-700 no-underline hover:text-gray-900"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/courses" 
                    className="text-sm font-medium text-gray-700 no-underline hover:text-gray-900"
                  >
                    Courses
                  </Link>
                  <Link 
                    href="/ai-trainer" 
                    className="text-sm font-medium text-gray-700 no-underline hover:text-gray-900"
                  >
                    AI Trainer
                  </Link>
                  <Link 
                    href="/signup" 
                    className="text-sm font-medium text-gray-700 no-underline hover:text-gray-900"
                  >
                    Sign Up
                  </Link>
                </div>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 no-underline"
                >
                  Get Started
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1 overflow-auto">
            {children}
          </main>
          <footer className="border-t bg-white">
            <div className="container mx-auto px-2 py-4">
              <div className="flex flex-col justify-around items-center">
                <p className="text-sm text-gray-500">
                  © 2024 DARB Professionals. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <Link 
                    href="/privacy" 
                    className="text-sm text-gray-500 hover:text-gray-900 no-underline"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/terms" 
                    className="text-sm text-gray-500 hover:text-gray-900 no-underline"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
