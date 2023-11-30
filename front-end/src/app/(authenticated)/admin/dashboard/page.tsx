import Image from 'next/image';
import { Button } from '@/components/ui/buttons/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getAllReservations } from '@/functions/data/reservations';

export default async function DashboardPage() {
  const reservations = await getAllReservations();
  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </>
  );
}
