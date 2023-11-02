import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function OutageAlert() {
  return (
    <Alert variant="destructive" className="sticky mt-10 mb-5">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Database Errors</AlertTitle>
      <AlertDescription>
        Our database provider is expierencing interruptions and may cause errors
        on this site. They are working to resolve the issue
      </AlertDescription>
    </Alert>
  );
}
