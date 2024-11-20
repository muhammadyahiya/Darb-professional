// src/components/ui/textarea.tsx
// import React from 'react';

// export const Textarea = React.forwardRef(({ label, ...props }, ref) => {
//   return (
//     <div className="flex flex-col mb-4">
//       {label && <label className="mb-2 text-sm font-semibold">{label}</label>}
//       <textarea
//         ref={ref}
//         {...props}
//         className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
//       />
//     </div>
//   );
// });

// Textarea.displayName = 'Textarea'; // Required for forwardRef

import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-accent",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
