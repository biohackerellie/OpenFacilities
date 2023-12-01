import {
  type SelectReservation,
  type SelectReservationDate,
  type SelectReservationFees,
  type SelectFacility,
  type SelectCategory,
  type SelectUser,
} from '../db/schema';

export type ReservationClassType = SelectReservation & {
  Facility?: SelectFacility;
  Category?: SelectCategory;
  ReservationDate?: SelectReservationDate[];
  ReservationFees?: SelectReservationFees[];
  User?: SelectUser;
};
class ReservationClass {
  id: number | BigInt;
  userId: string;
  eventName: string;
  phone?: string | null;
  User?: SelectUser;
  categoryId: number | BigInt;
  facilityId: number | BigInt;
  details?: string | null;
  approved: 'pending' | 'approved' | 'denied' | 'canceled';
  inPerson: boolean;
  ReservationDate?: SelectReservationDate[];
  ReservationFees?: SelectReservationFees[];
  Facility?: SelectFacility;
  Category?: SelectCategory;
  costOverride?: number | null;
  paid: boolean;
  insuranceLink?: string | null;
  paymentUrl?: string | null;
  techSupport?: boolean | null;
  techDetails?: string | null;
  name?: string | null;
  doorAccess?: boolean | null;
  doorsDetails?: string | null;
  _additionalFeesTotal = 0;
  _totalCost = 0;
  constructor(reservation: ReservationClassType) {
    this.id = reservation.id;
    this.userId = reservation.userId;
    this.eventName = reservation.eventName;
    this.phone = reservation.phone;
    this.User = reservation.User;
    this.categoryId = reservation.categoryId;
    this.facilityId = reservation.facilityId;
    this.details = reservation.details;
    this.approved = reservation.approved;
    this.inPerson = reservation.inPerson;
    this.ReservationDate = reservation.ReservationDate;
    this.ReservationFees = reservation.ReservationFees;
    this.Facility = reservation.Facility;
    this.Category = reservation.Category;
    this.costOverride = reservation.costOverride;
    this.paid = reservation.paid;
    this.insuranceLink = reservation.insuranceLink;
    this.paymentUrl = reservation.paymentUrl;
    this.techSupport = reservation.techSupport;
    this.techDetails = reservation.techDetails;
    this.name = reservation.name;
    this.doorAccess = reservation.doorAccess;
    this.doorsDetails = reservation.doorsDetails;
  }
  range(): string {
    let ReservationDate = this.ReservationDate || [];
    let dateRange = '';
    if (ReservationDate.length > 1) {
      dateRange = `${ReservationDate[0].startDate} - ${
        ReservationDate[ReservationDate.length - 1].endDate
      }`;
    } else {
      dateRange = `${ReservationDate[0].startDate}`;
    }
    return dateRange;
  }
  CostReducer(): number {
    let additionalFeesTotal = 0;
    let ReservationFees = this.ReservationFees || [];
    let ReservationDate = this.ReservationDate || [];
    let categoryId = this.categoryId;
    let Category = this.Category || null;
    let CategoryPrice = Category?.price || 0;
    let totalCost = 0;
    if (ReservationFees.length > 0) {
      for (let i = 0; i < ReservationFees.length; i++) {
        if (i === null) continue;
        //@ts-expect-error
        additionalFeesTotal += ReservationFees[i].additionalFees;
      }
    }
    let approvedReservationDates = ReservationDate.filter(
      (reservationDate: any) => {
        return reservationDate.approved === 'approved';
      }
    );
    if (categoryId === 105 || categoryId === 106 || categoryId === 107) {
      totalCost = CategoryPrice + additionalFeesTotal;
    } else {
      let totalHours = approvedReservationDates.reduce(
        (acc: any, reservationDate: any) => {
          const startTime: any = new Date(
            `1970-01-01T${reservationDate.startTime}Z`
          );
          const endTime: any = new Date(
            `1970-01-01T${reservationDate.endTime}Z`
          );
          const hours = Math.abs(endTime - startTime) / 36e5;
          return acc + hours;
        },
        0
      );
      totalCost = totalHours * CategoryPrice + additionalFeesTotal;
    }
    return Number(totalCost.toFixed(2));
  }
}

export { ReservationClass };
