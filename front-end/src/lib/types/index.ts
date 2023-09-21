import NextAuth, { user as NextAuthuser } from 'next-auth';
import { Path, UseFormRegister } from 'react-hook-form';

export interface facility {
  map(
    arg0: (facility: facility) => import('react').JSX.Element
  ): import('react').ReactNode;
  id: number;
  image_path: string;
  name: string;
  building: string;
  address: string;
  calendar_id: string;
  capacity: number;
  category: [
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

export interface user extends NextAuthuser {
  roles: Role;
  email: string;
}

export type FormData = {
  eventname: string;
  category: string;
  name: string;
  phone: string;
  email: string;
  recurrence: string;
  startdate: string;
  starttime: string;
  people: number;
  facility: string;
  enddate: string;
  endtime: string;
  details: string;
};

export interface IFormInput {
  eventname: string;
  category: { label: string; value: number };
  name: string;
  phone: string;
  email: string;
  recurrence: { label: string; value: string };
  startdate: Date;
  people: number;
  techsupport: boolean;
  techdetails: string;
  doorAccess: boolean;
  doorDetails: string;

  events: {
    startdate: Date;
    enddate: Date;
    starttime: Date;
    endtime: Date;
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

export interface reservation {
  id: number;
  name?: string;
  userId: string;
  eventname: string;
  ?: string;
  people?: string;
  doorAccess?: boolean;
  doorsDetails?: string;
  techsupport?: boolean;
  techdetails?: string;

  responsibleparty?: string;
  primarycontact?: string;
  insurance?: string;
  phone?: string;
  details?: string;
  fees?: string;
  facilityid: number;
  recurrence?: string;
  approved: 'pending' | 'approved' | 'denied' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  reservationfees: [];
  event?: any[];
  category?: string;
  facility: facility;
  user?: user;
  reservationdate: any[];
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
