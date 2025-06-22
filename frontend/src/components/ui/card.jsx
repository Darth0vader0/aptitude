import React from 'react';

function Card({
  children,
  className = '',
  padding = 'md',
  hover = false,
}) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClass = hover ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : '';

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-200 ${paddingClasses[padding]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;