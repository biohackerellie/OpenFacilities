import React from 'react';

interface RedButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export default function RedButton({
  onClick,
  children,
  disabled,
}: RedButtonProps) {
  const baseClasses = 'bg-red-500  text-white font-bold py-2 px-4 rounded';
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  const enabledClasses = 'hover:bg-red-700';

  const buttonClasses = disabled
    ? `${baseClasses} ${disabledClasses}`
    : `${baseClasses} ${enabledClasses}`;
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
