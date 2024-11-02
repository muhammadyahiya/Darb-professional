import Link from 'next/link';
import { Button } from "@/components/ui/button";
import styles from '../styles/Home.module.css'; // Ensure the correct path

export default function Home() {
  return (
    <div className={`${styles.container} space-y-12`}>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to DARB Professionals</h1>
        <p className="text-xl text-muted-foreground">Elevate your data analysis and reporting skills for business success</p>
        <Button size="lg">
          <Link href="/signup">Get Started</Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Expert-Led Courses</h2>
          <p>Learn from industry professionals and enhance your DARB skills.</p>
          <Button variant="outline">
            <Link href="/courses">Explore Courses</Link>
          </Button>
        </div>
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold">AI-Powered Training</h2>
          <p>Get personalized learning experiences with our AI trainer.</p>
          <Button variant="outline">
            <Link href="/ai-trainer">Try AI Trainer</Link>
          </Button>
        </div>
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Community</h2>
          <p>Connect with fellow DARB professionals and expand your network.</p>
          <Button variant="outline">
            <Link href="/community">Join Community</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
