import NextAuth, { User as NextAuthUser } from 'next-auth';
import {
  Category,
  ReservationDate,
  ReservationFees,
  SelectEvents,
  SelectFacility,
} from '../db/schema';
import { Path, UseFormRegister } from 'react-hook-form';
import { $Enums, Category } from '@prisma/client';

export interface Facility {
  map(
    arg0: (facility: Facility) => import('react').JSX.Element
  ): import('react').ReactNode;
  id: number;
  image_path: string;
  name: string;
  building: string;
  address: string;
  calendar_id: string;
  capacity: number;
  Category: [
    {
      name: string;
      description: string;
      price: string;
    }
  ];
}

export interface Role {
  role: string;
}

export interface User extends NextAuthUser {
  roles: Role;
  email: string;
}

export type FormData = {
  eventName: string;
  Category: string;
  name: string;
  phone: string;
  email: string;
  recurrence: string;
  startDate: string;
  startTime: string;
  people: number;
  facility: string;
  endDate: string;
  endTime: string;
  details: string;
};

export interface IFormInput {
  eventName: string;
  Category: { label: string; value: number };
  name: string;
  phone: string;
  email: string;
  recurrence: { label: string; value: string };
  startDate: Date;
  people: number;
  techSupport: boolean;
  techDetails: string;
  doorAccess: boolean;
  doorDetails: string;

  events: {
    startDate: Date;
    endDate: Date;
    startTime: Date;
    endTime: Date;
  }[];
  details: string;
  building: { key: string; value: string };
  facilityName: { key: string; value: number; name: string };
}

export type InputProps = {
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
  required: boolean;
  defaultValue?: string;
};

export type ReservationDate = {
  id: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  reservationId: bigint;
  approved: $Enums.ReservationDate_approved;
  gcal_eventid: string | null;
};

export interface Reservation {
  id: number;
  name?: string;
  userId: string;
  eventName: string;
  eventId?: string;
  people?: string;
  doorAccess?: boolean;
  doorsDetails?: string;
  techSupport?: boolean;
  techDetails?: string;

  primaryContact?: string;
  insurance?: string;
  phone?: string;
  details?: string;
  fees?: string;
  facilityId: number;
  recurrence?: string;
  approved: 'pending' | 'approved' | 'denied' | 'canceled';
  createdAt: Date;
  updatedAt: Date;
  additionalFees: [];
  Event?: any[];
  Category?: Category;
  Facility: Facility;
  User?: User;
  ReservationDate: any[];
}

export interface IAlert {
  title: string;
  text: string;
  icon: any;
  showCancelButton?: boolean;
  showDenyButton?: boolean;
  confirmButtonText?: string;
  denyButtonText?: string;
  cancelButtonText?: string;
  id: number;
  onConfirm?: (id: number) => Promise<void>;
  onDeny?: (id: number) => Promise<void>;
  onConfirmText: {
    title?: string;
    text?: string;
    icon?: any;
  };
  onDenyText: {
    title?: string;
    text?: string;
    icon?: any;
  };
}

export interface TableReservation {
  eventName: string;
  Facility: string;
  ReservationDate: any[];
  approved: 'pending' | 'approved' | 'denied' | 'canceled';
  User?: string;
  Details: number;
}

export type DateType = {
  Options?: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  approved: 'pending' | 'approved' | 'denied' | 'canceled';
  ReservationID: any;
};

export type Events = {
  id: string;
  calendarId: string | null;
  title: string | null;
  start: string | number | Date;
  end: string | number | Date;
  location: string | null;
  recurringEventId: string | null;
  facilityId: bigint | number;
  Facility: Facility;
  placeholder: boolean;
};

export type SelectCategory = typeof Category.$inferSelect;
export type SelectReservationFees = typeof ReservationFees.$inferSelect;
export type SelectReservationDate = typeof ReservationDate.$inferSelect;

export type EventsWithFacility = SelectEvents & {
  facility?: SelectFacility;
};

export type ReservationWithAll = Reservation & {
  ReservationDate?: SelectReservationDate[];
  ReservationFees?: SelectReservationFees[];
  Facility?: SelectFacility;
  Category?: SelectCategory;
};

export type FacilityWithCategory = SelectFacility & {
  Category?: SelectCategory[];
};
export interface ChartData {
  month?: string;
  totalReservations?: number;
  buildingName?: string;
}

export interface RevenueData {
  month?: string;
  Revenue: number;
  Loss: number;
}
