import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function FacilityCardSkeleton() {
  return (
    <Card className="h-[380px] w-[400px] bg-opacity-10 border-gray-100 ">
      <CardHeader>
        <Skeleton className="h-[260px] w-[350px]" />
      </CardHeader>
      <CardContent className=" text-center space-y-1 mt-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
      </CardContent>
    </Card>
  );
}
