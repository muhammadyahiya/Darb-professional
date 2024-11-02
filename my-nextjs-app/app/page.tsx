import Link from 'next/link';
import { Button } from "@/components/ui/button";
import styles from '../styles/Home.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, buttonText, buttonLink }) => (
  <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 space-y-4">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p>{description}</p>
    <Button variant="outline">
      <Link href={buttonLink}>{buttonText}</Link>
    </Button>
  </div>
);

const features: FeatureCardProps[] = [
  {
    title: "Expert-Led Courses",
    description: "Learn from industry professionals and enhance your DARB skills.",
    buttonText: "Explore Courses",
    buttonLink: "/courses"
  },
  {
    title: "AI-Powered Training",
    description: "Get personalized learning experiences with our AI trainer.",
    buttonText: "Try AI Trainer",
    buttonLink: "/ai-trainer"
  },
  {
    title: "Community",
    description: "Connect with fellow DARB professionals and expand your network.",
    buttonText: "Join Community",
    buttonLink: "/community"
  }
];

export default function Home() {
  return (
    <div className={`${styles.container} space-y-12`}>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to DARB Professionals</h1>
        <p className="text-xl text-muted-foreground">
          Elevate your data analysis and reporting skills for business success
        </p>
        <Button size="lg">
          <Link href="/signup">Get Started</Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </section>
    </div>
  );
}
