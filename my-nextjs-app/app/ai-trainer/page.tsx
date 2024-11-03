// // 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { AlertCircle } from "lucide-react"

// export default function AITrainerPage() {
//   const [query, setQuery] = useState('')
//   const [response, setResponse] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setError(null)

//     try {
//       const response = await fetch('/api/ai-trainer', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ query }),
//       })

//       if (!response.ok) {
//         throw new Error('Failed to get response from AI trainer')
//       }

//       const data = await response.json()
//       setResponse(data.response)
//     } catch (err) {
//       setError('Unable to connect to AI trainer. Please try again later.')
//       console.error('AI trainer error:', err)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="max-w-4xl mx-auto space-y-8">
//       <div className="space-y-4">
//         <h1 className="text-3xl font-bold">AI Training Assistant</h1>
//         <p className="text-muted-foreground">
//           Get personalized guidance and answers to your data analysis and business reporting questions.
//         </p>
//       </div>

//       {error && (
//         <Alert variant="destructive">
//           <AlertCircle className="h-4 w-4" />
//           <AlertTitle>Error</AlertTitle>
//           <AlertDescription>{error}</AlertDescription>
//         </Alert>
//       )}

//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="space-y-4">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="space-y-2">
//               <label htmlFor="query" className="text-sm font-medium">
//                 Ask your question
//               </label>
//               <Input
//                 id="query"
//                 value={query}
//                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
//                 placeholder="e.g., How do I create effective data visualizations?"
//                 className="h-24"
//                 required
//               />
//             </div>
//             <Button type="submit" disabled={isLoading} className="w-full">
//               {isLoading ? 'Processing...' : 'Ask AI Trainer'}
//             </Button>
//           </form>

//           <div className="bg-muted p-4 rounded-lg">
//             <h2 className="font-semibold mb-2">Sample Questions</h2>
//             <ul className="space-y-2 text-sm">
//               <li>• How do I analyze time series data?</li>
//               <li>• What are the best practices for data cleaning?</li>
//               <li>• How can I improve my business reporting skills?</li>
//               <li>• What tools should I learn for data analysis?</li>
//             </ul>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <h2 className="font-semibold">AI Response</h2>
//           <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 min-h-[300px]">
//             {isLoading ? (
//               <div className="flex items-center justify-center h-full">
//                 <div className="animate-pulse text-muted-foreground">Processing your question...</div>
//               </div>
//             ) : response ? (
//               <div className="prose prose-sm max-w-none">
//                 {response.split('\n').map((paragraph, index) => (
//                   <p key={index} className="mb-4">{paragraph}</p>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-muted-foreground text-center h-full flex items-center justify-center">
//                 Your AI response will appear here
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
