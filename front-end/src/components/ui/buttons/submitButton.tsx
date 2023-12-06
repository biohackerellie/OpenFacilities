'use client';
import { Button } from './button';
//TODO: Update React types when available
//@ts-expect-error
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

type Props = {
  children?: React.ReactNode;
  className?: string;
  variant?: string;
};

export function SubmitButton({ children, className, variant }: Props) {
  const { pending } = useFormStatus();
  return (
    <Button className={className || ''} type="submit" disabled={pending}>
      {pending ? (
        <Loader2 className="animate-spin w-2 h-2" />
      ) : children ? (
        children
      ) : (
        'Submit'
      )}
    </Button>
  );
}
