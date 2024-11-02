// src/components/ui/textarea.tsx
import React from 'react';

export const Textarea = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-2 text-sm font-semibold">{label}</label>}
      <textarea
        ref={ref}
        {...props}
        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
});

Textarea.displayName = 'Textarea'; // Required for forwardRef