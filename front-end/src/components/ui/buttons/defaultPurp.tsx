import React from 'react';

interface PurpleButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function PurpleButton({
  onClick,
  children,
  disabled,
}: PurpleButtonProps) {
  const baseClasses =
    'bg-primary dark:bg-secondary text-sm sm:text-md p-1 mx-2 text-white rounded shadow-md';
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  const enabledClasses =
    'hover:bg-secondary drop-shadow-md transition-all duration-75 ease-in-out ';

  const buttonClasses = disabled
    ? `${baseClasses} ${disabledClasses}`
    : `${baseClasses} ${enabledClasses}`;
  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
}
