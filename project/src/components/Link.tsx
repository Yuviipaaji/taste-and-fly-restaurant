import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void; // Added onClick prop
}

export function Link({ href, children, className = '' }: LinkProps) {
  const baseClasses = 'font-semibold transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:animate-float';
  const combinedClasses = `${baseClasses} ${className}`;

  return (
    <a href={href} className={combinedClasses}>
      {children}
    </a>
  );
}
