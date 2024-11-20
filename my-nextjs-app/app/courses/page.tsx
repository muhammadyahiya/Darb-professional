import Link from 'next/link'
import { Button } from "@/components/ui/button"

const courses = [
  { id: 1, title: "Data Analysis Fundamentals", description: "Learn the basics of data analysis for business.", price: 99 },
  { id: 2, title: "Advanced Business Reporting", description: "Master the art of creating impactful business reports.", price: 149 },
  { id: 3, title: "Data Visualization Techniques", description: "Transform complex data into compelling visual stories.", price: 129 },
  { id: 4, title: "Predictive Analytics for Business", description: "Harness the power of predictive models for business insights.", price: 199 },
]

export default function CoursesPage() {
  return (
    <div className="space-y-8 px-4 my-[20px]">
      <h1 className="text-3xl font-bold text-accent text-center">Our Courses</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-card text-card-foreground rounded-lg shadow-md p-6 space-y-4">
            <h2 className="text-2xl font-semibold">{course.title}</h2>
            <p className="text-muted-foreground">{course.description}</p>
            <p className="text-lg font-bold">${course.price}</p>
            <Button asChild>
              <Link href={`/payment?course=${course.id}`}>Enroll Now</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}