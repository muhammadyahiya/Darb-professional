import Link from 'next/link'
import { Button } from "@/components/ui/button"
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen bg-background font-sans antialiased">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">DARB Pro</span>
            </Link>
            <nav className="flex items-center space-x-6 ml-6">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
                Courses
              </Link>
              <Link href="/ai-trainer" className="text-sm font-medium transition-colors hover:text-primary">
                AI Trainer
              </Link>
              <Link href="/signup" className="text-sm font-medium transition-colors hover:text-primary">
                Sign Up
              </Link>
            </nav>
            <div className="ml-auto flex items-center space-x-4">
              <Button asChild variant="default">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t bg-background">
          <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
            <div className="flex-1">
              <div className="font-semibold">DARB Professionals</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Empowering data professionals with expert training and AI-powered learning.
              </p>
            </div>
            <div className="flex-1">
              <nav className="grid gap-4 text-sm">
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                <Link href="/terms" className="hover:underline">Terms of Service</Link>
              </nav>
            </div>
          </div>
          <div className="border-t">
            <div className="container flex h-14 items-center justify-between">
              <div className="text-sm text-muted-foreground">
                © 2024 DARB Professionals. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
