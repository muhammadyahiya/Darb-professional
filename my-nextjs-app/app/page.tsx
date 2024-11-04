import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { BookOpen, Brain, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to DARB Professionals
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Elevate your data analysis and reporting skills for business success
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <BookOpen className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Expert-Led Courses</h3>
                <p className="text-sm text-muted-foreground">Learn from industry professionals and enhance your DARB skills.</p>
              </div>
            </div>
            <div className="p-2">
              <Button asChild variant="secondary" className="w-full">
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Brain className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">AI-Powered Training</h3>
                <p className="text-sm text-muted-foreground">Get personalized learning experiences with our AI trainer.</p>
              </div>
            </div>
            <div className="p-2">
              <Button asChild variant="secondary" className="w-full">
                <Link href="/ai-trainer">Try AI Trainer</Link>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Users className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Community</h3>
                <p className="text-sm text-muted-foreground">Connect with fellow DARB professionals and expand your network.</p>
              </div>
            </div>
            <div className="p-2">
              <Button asChild variant="secondary" className="w-full">
                <Link href="/community">Join Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
