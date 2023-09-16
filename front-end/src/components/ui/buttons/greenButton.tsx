import React from 'react';

interface GreenButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function GreenButton({
  onClick,
  children,
  disabled,
}: GreenButtonProps) {
  const baseClasses = 'bg-green-500  text-white font-bold py-2 px-4 rounded';
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  const enabledClasses = 'hover:bg-green-700';

  const buttonClasses = disabled
    ? `${baseClasses} ${disabledClasses}`
    : `${baseClasses} ${enabledClasses}`;
  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
}
