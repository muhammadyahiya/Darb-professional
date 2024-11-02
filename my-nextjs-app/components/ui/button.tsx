import React from 'react';

export const Button = React.forwardRef(({ children, asChild, ...props }, ref) => {
  const Component = asChild ? 'span' : 'button'; // Render as 'span' if asChild is true

  return (
    <Component
      ref={ref}
      {...props}
      className="bg-blue-500 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-600"
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';
