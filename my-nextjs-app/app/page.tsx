import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Welcome to DARB Professionals
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Elevate your data analysis and reporting skills for business success
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="h-12 px-8">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <Card className="relative group overflow-hidden">
              <CardHeader className="space-y-2">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Expert-Led Courses</CardTitle>
                <CardDescription>Learn from industry professionals and enhance your DARB skills.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/courses" className="text-primary hover:text-primary/80">
                    Explore Courses →
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="relative group overflow-hidden">
              <CardHeader className="space-y-2">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Training</CardTitle>
                <CardDescription>Get personalized learning experiences with our AI trainer.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/ai-trainer" className="text-primary hover:text-primary/80">
                    Try AI Trainer →
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="relative group overflow-hidden">
              <CardHeader className="space-y-2">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>Connect with fellow DARB professionals and expand your network.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="p-0 h-auto">
                  <Link href="/community" className="text-primary hover:text-primary/80">
                    Join Community →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
