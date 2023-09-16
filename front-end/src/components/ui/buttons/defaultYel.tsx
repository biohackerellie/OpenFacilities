import React from 'react';

interface YellowButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function YellowButton({
  onClick,
  children,
  disabled,
}: YellowButtonProps) {
  const baseClasses =
    'bg-gold dark:bg-primary text-sm sm:text-md p-1 mx-2 text-white rounded shadow-md';
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  const enabledClasses =
    'hover:bg-purple-700 drop-shadow-md transition-all duration-75 ease-in-out ';

  const buttonClasses = disabled
    ? `${baseClasses} ${disabledClasses}`
    : `${baseClasses} ${enabledClasses}`;
  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
}
