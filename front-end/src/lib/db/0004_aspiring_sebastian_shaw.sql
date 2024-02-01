ALTER TABLE "facilities_db"."Account" DROP CONSTRAINT "Account_userId_User_id_fk";
--> statement-breakpoint
ALTER TABLE "facilities_db"."Category" DROP CONSTRAINT "Category_facilityId_Facility_id_fk";
--> statement-breakpoint
ALTER TABLE "facilities_db"."Events" DROP CONSTRAINT "Events_facilityId_Facility_id_fk";
--> statement-breakpoint
ALTER TABLE "facilities_db"."InsuranceFiles" DROP CONSTRAINT "InsuranceFiles_reservationId_Reservation_id_fk";
--> statement-breakpoint
ALTER TABLE "facilities_db"."Reservation" DROP CONSTRAINT "Reservation_userId_User_id_fk";
--> statement-breakpoint
ALTER TABLE "facilities_db"."ReservationDate" DROP CONSTRAINT "ReservationDate_reservationId_Reservation_id_fk";
--> statement-breakpoint
ALTER TABLE "facilities_db"."ReservationFees" DROP CONSTRAINT "ReservationFees_reservationId_Reservation_id_fk";
--> statement-breakpoint
ALTER TABLE "facilities_db"."Session" DROP CONSTRAINT "Session_userId_User_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Account" ADD CONSTRAINT "Account_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "facilities_db"."User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Category" ADD CONSTRAINT "Category_facilityId_Facility_id_fk" FOREIGN KEY ("facilityId") REFERENCES "facilities_db"."Facility"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Events" ADD CONSTRAINT "Events_facilityId_Facility_id_fk" FOREIGN KEY ("facilityId") REFERENCES "facilities_db"."Facility"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."InsuranceFiles" ADD CONSTRAINT "InsuranceFiles_reservationId_Reservation_id_fk" FOREIGN KEY ("reservationId") REFERENCES "facilities_db"."Reservation"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Reservation" ADD CONSTRAINT "Reservation_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "facilities_db"."User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."ReservationDate" ADD CONSTRAINT "ReservationDate_reservationId_Reservation_id_fk" FOREIGN KEY ("reservationId") REFERENCES "facilities_db"."Reservation"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."ReservationFees" ADD CONSTRAINT "ReservationFees_reservationId_Reservation_id_fk" FOREIGN KEY ("reservationId") REFERENCES "facilities_db"."Reservation"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Session" ADD CONSTRAINT "Session_userId_User_id_fk" FOREIGN KEY ("userId") REFERENCES "facilities_db"."User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;