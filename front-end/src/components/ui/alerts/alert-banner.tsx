import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function OutageAlert() {
  return (
    <Alert variant="destructive" className="sticky mt-10 mb-5">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Microsoft Single Sign On</AlertTitle>
      <AlertDescription>
        We are currently expierencing issues with Single Sign On for staff
        accounts. We are working to resolve this issue as soon as possible.
      </AlertDescription>
    </Alert>
  );
}
