// src/components/ui/label.tsx
import React from 'react';

export const Label = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="mb-2 text-sm font-semibold">
      {children}
    </label>
  );
};
