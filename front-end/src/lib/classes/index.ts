import type {SelectReservation, SelectReservationDate, SelectReservationFees, SelectFacility, SelectCategory, SelectUser} from '../db/schema';

export type ReservationClassType = SelectReservation & {
  Facility?: SelectFacility;
  Category?: SelectCategory;
  ReservationDate?: SelectReservationDate[];
  ReservationFees?: SelectReservationFees[];
  User?: SelectUser;
};

/**
 * `ReservationClass` is a class that handles operations related to reservations.
 *
 * @class
 * @exports ReservationClass
 */
class ReservationClass {
  id: number | bigint;
  userId: string;
  eventName: string;
  phone?: string | null;
  User?: SelectUser;
  categoryId: number | bigint;
  facilityId: number | bigint;
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
  /**
   *  @method
   * 	@returns {string} - A string representing the date range of the reservation.
   */
  range(): string {
    const ReservationDate = this.ReservationDate || [];
    let dateRange = '';
    if (ReservationDate.length > 1) {
      dateRange = `${ReservationDate[0].startDate} - ${
        ReservationDate[ReservationDate.length - 1].endDate
      }`;
    } else if (ReservationDate.length === 1) {
      dateRange = `${ReservationDate[0].startDate}`;
    } else {
      dateRange = 'No Upcoming Dates';
    }

    return dateRange;
  }

  /**
   * This method calculates the total cost of a reservation.
   *
   * If the category ID is 105, 106, or 107, the total cost is the sum of the category price and additional fees.
   * Otherwise, the total cost is calculated based on the total hours of approved reservation dates,
   * multiplied by the category price, and then added to the additional fees.
   *
   * @method
   * @returns {number} The total cost of the reservation, rounded to two decimal places.
   */
  CostReducer(): number {
    let additionalFeesTotal = 0;
    const ReservationFees = this.ReservationFees || [];
    const ReservationDate = this.ReservationDate || [];
    const categoryId = this.categoryId;
    const Category = this.Category || null;
    const CategoryPrice = Category?.price || 0;
    let totalCost = 0;
    if (ReservationFees.length > 0) {
      for (let i = 0; i < ReservationFees.length; i++) {
        if (i === null) continue;
        //@ts-expect-error
        additionalFeesTotal += ReservationFees[i].additionalFees;
      }
    }
    const approvedReservationDates = ReservationDate.filter(
      (reservationDate: any) => {
        return reservationDate.approved === 'approved';
      }
    );
    if (categoryId === 105 || categoryId === 106 || categoryId === 107) {
      totalCost = CategoryPrice + additionalFeesTotal;
    } else {
      const totalHours = approvedReservationDates.reduce(
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
