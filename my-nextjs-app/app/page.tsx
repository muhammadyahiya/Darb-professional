import Link from 'next/link'
import { BookOpen, Brain, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900">
            Welcome to DARB Professionals
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-xl">
            Elevate your data analysis and reporting skills for business success
          </p>
          <Link
            href="/sign-up"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 no-underline"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expert-Led Courses */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <BookOpen className="h-10 w-10 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900">Expert-Led Courses</h3>
              <p className="mt-2 text-gray-600">
                Learn from industry professionals and enhance your DARB skills.
              </p>
              <Link
                href="/courses"
                className="mt-4 inline-flex items-center text-gray-900 hover:text-gray-700 no-underline"
              >
                Explore Courses →
              </Link>
            </div>

            {/* AI-Powered Training */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Brain className="h-10 w-10 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900">AI-Powered Training</h3>
              <p className="mt-2 text-gray-600">
                Get personalized learning experiences with our AI trainer.
              </p>
              <Link
                href="/ai-trainer"
                className="mt-4 inline-flex items-center text-gray-900 hover:text-gray-700 no-underline"
              >
                Try AI Trainer →
              </Link>
            </div>

            {/* Community */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-10 w-10 text-gray-900 mb-4" />
              <h3 className="text-xl font-bold text-gray-900">Community</h3>
              <p className="mt-2 text-gray-600">
                Connect with fellow DARB professionals and expand your network.
              </p>
              <Link
                href="/community"
                className="mt-4 inline-flex items-center text-gray-900 hover:text-gray-700 no-underline"
              >
                Join Community →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
