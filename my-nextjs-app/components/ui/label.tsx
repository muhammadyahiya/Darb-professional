import React, { ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
  htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="mb-2 text-sm font-semibold text-accent">
      {children}
    </label>
  );
};
