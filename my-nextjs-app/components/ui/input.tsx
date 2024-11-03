// // src/components/ui/input.tsx
// import React from 'react';

// export const Input = React.forwardRef(({ label, ...props }, ref) => {
//   return (
//     <div className="flex flex-col mb-4">
//       {label && <label className="mb-2 text-sm font-semibold">{label}</label>}
//       <input
//         ref={ref}
//         {...props}
//         className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
//       />
//     </div>
//   );
// });

// Input.displayName = 'Input'; // Required for forwardRef




import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
