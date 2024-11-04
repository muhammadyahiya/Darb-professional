import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold">DARB Pro</span>
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-sm font-medium hover:text-primary">
                  Home
                </Link>
                <Link href="/courses" className="text-sm font-medium hover:text-primary">
                  Courses
                </Link>
                <Link href="/ai-trainer" className="text-sm font-medium hover:text-primary">
                  AI Trainer
                </Link>
                <Link href="/sign-up" className="text-sm font-medium hover:text-primary">
                  Sign Up
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <Button asChild>
                  <Link href="/sign-up">Get Started</Link>
                </Button>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t">
            <div className="container flex flex-col gap-4 py-10 md:h-24 md:flex-row md:py-0">
              <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-center">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2024 DARB Professionals. All rights reserved.
                </p>
              </div>
              <nav className="flex gap-4 md:ml-auto md:gap-6">
                <Link href="/privacy" className="text-sm font-medium hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm font-medium hover:underline">
                  Terms of Service
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
