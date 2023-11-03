-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE SCHEMA "facilities_db";
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "key_status" AS ENUM('default', 'valid', 'invalid', 'expired');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "key_type" AS ENUM('aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "factor_type" AS ENUM('totp', 'webauthn');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "factor_status" AS ENUM('unverified', 'verified');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "aal_level" AS ENUM('aal1', 'aal2', 'aal3');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "code_challenge_method" AS ENUM('s256', 'plain');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "Reservation_approved" AS ENUM('pending', 'approved', 'denied', 'canceled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "ReservationDate_approved" AS ENUM('pending', 'approved', 'denied', 'canceled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "User_role" AS ENUM('CAL_ADMIN', 'ADMIN_ADMIN', 'GR_ADMIN', 'LHS_ADMIN', 'LMS_ADMIN', 'WE_ADMIN', 'SO_ADMIN', 'SUP_ADMIN', 'USER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."ReservationFees" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"additionalFees" double precision,
	"feesType" varchar(191),
	"reservationId" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."Session" (
	"id" varchar(191) PRIMARY KEY NOT NULL,
	"sessionToken" varchar(191) NOT NULL,
	"userId" varchar(191) NOT NULL,
	"expires" timestamp(3) with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."Category" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" varchar(191) NOT NULL,
	"description" text NOT NULL,
	"price" double precision NOT NULL,
	"facilityId" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."Events" (
	"id" varchar(191) PRIMARY KEY NOT NULL,
	"calendarId" varchar(191),
	"title" varchar(191),
	"start" timestamp(3) with time zone,
	"end" timestamp(3) with time zone,
	"location" varchar(191),
	"recurringEventId" varchar(191),
	"facilityId" bigint,
	"placeholder" boolean DEFAULT false
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."InsuranceFiles" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"path" varchar(191),
	"fileName" varchar(191),
	"reservationId" bigint NOT NULL,
	"varified" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."Account" (
	"id" varchar(191) PRIMARY KEY NOT NULL,
	"userId" varchar(191) NOT NULL,
	"type" varchar(191) NOT NULL,
	"provider" varchar(191) NOT NULL,
	"providerAccountId" varchar(191) NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" varchar(191),
	"scope" varchar(191),
	"id_token" text,
	"session_state" varchar(191),
	"ext_expires_in" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."Reservation" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"userId" varchar(191) NOT NULL,
	"eventName" varchar(191) NOT NULL,
	"facilityId" bigint NOT NULL,
	"approved" "facilities_db."Reservation_approved" DEFAULT 'pending' NOT NULL,
	"createdAt" timestamp(3) with time zone DEFAULT CURRENT_TIMESTAMP,
	"updatedAt" timestamp(3) with time zone,
	"details" varchar(2000),
	"fees" double precision,
	"insurance" boolean NOT NULL,
	"primaryContact" varchar(191),
	"doorAccess" boolean,
	"doorsDetails" varchar(191),
	"name" varchar(191),
	"people" varchar(191),
	"techDetails" varchar(191),
	"techSupport" boolean,
	"phone" varchar(191),
	"categoryId" bigint NOT NULL,
	"totalHours" double precision,
	"inPerson" boolean DEFAULT false NOT NULL,
	"paid" boolean DEFAULT false NOT NULL,
	"paymentUrl" varchar(191),
	"paymentLinkID" varchar(191),
	"ticketMade" boolean DEFAULT false NOT NULL,
	"conflicts" boolean DEFAULT false NOT NULL,
	"insuranceLink" varchar(191),
	"costOverride" double precision
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."ReservationDate" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"startDate" varchar(191) NOT NULL,
	"endDate" varchar(191) NOT NULL,
	"startTime" varchar(191) NOT NULL,
	"endTime" varchar(191) NOT NULL,
	"reservationId" bigint NOT NULL,
	"approved" "facilities_db."ReservationDate_approved" DEFAULT 'pending' NOT NULL,
	"gcal_eventid" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."Facility" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" varchar(191) NOT NULL,
	"building" varchar(191) NOT NULL,
	"address" varchar(191) NOT NULL,
	"imagePath" varchar(191),
	"capacity" integer,
	"createdAt" timestamp(3) with time zone DEFAULT CURRENT_TIMESTAMP,
	"updatedAt" timestamp(3) with time zone,
	"googleCalendarId" varchar(191) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."User" (
	"id" varchar(191) PRIMARY KEY NOT NULL,
	"name" varchar(191) NOT NULL,
	"image" varchar(191),
	"email" varchar(191) NOT NULL,
	"emailVerified" timestamp(3) with time zone,
	"password" varchar(191),
	"provider" varchar(191),
	"externalUser" boolean DEFAULT false NOT NULL,
	"role" "facilities_db."User_role" DEFAULT 'USER' NOT NULL,
	"createdAt" timestamp(3) with time zone DEFAULT CURRENT_TIMESTAMP,
	"tos" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."VerificationToken" (
	"identifier" varchar(191) NOT NULL,
	"token" varchar(191) NOT NULL,
	"expires" timestamp(3) with time zone
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "facilities_db"."_prisma_migrations" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"checksum" varchar(64) NOT NULL,
	"finished_at" timestamp(3) with time zone,
	"migration_name" varchar(255) NOT NULL,
	"logs" text,
	"rolled_back_at" timestamp(3) with time zone,
	"started_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
	"applied_steps_count" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_30147_ReservationFees_reservationId_fkey" ON "facilities_db"."ReservationFees" ("reservationId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_30151_Session_userId_fkey" ON "facilities_db"."Session" ("userId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_30151_Session_sessionToken_key" ON "facilities_db"."Session" ("sessionToken");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_30095_Category_facilityId_fkey" ON "facilities_db"."Category" ("facilityId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_30101_Events_id_key" ON "facilities_db"."Events" ("id");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_30101_Events_facilityId_fkey" ON "facilities_db"."Events" ("facilityId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_30115_InsuranceFiles_reservationId_fkey" ON "facilities_db"."InsuranceFiles" ("reservationId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_30089_Account_userId_fkey" ON "facilities_db"."Account" ("userId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_30089_Account_provider_providerAccountId_key" ON "facilities_db"."Account" ("provider","providerAccountId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_30126_Reservation_userId_fkey" ON "facilities_db"."Reservation" ("userId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_30126_Reservation_paymentLinkID_key" ON "facilities_db"."Reservation" ("paymentLinkID");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_30126_Reservation_facilityId_fkey" ON "facilities_db"."Reservation" ("facilityId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_30126_Reservation_categoryId_fkey" ON "facilities_db"."Reservation" ("categoryId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_30139_ReservationDate_reservationId_fkey" ON "facilities_db"."ReservationDate" ("reservationId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_30107_Facility_name_key" ON "facilities_db"."Facility" ("name");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_30107_Facility_calendarId_key" ON "facilities_db"."Facility" ("googleCalendarId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_30156_User_email_key" ON "facilities_db"."User" ("email");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_30165_VerificationToken_identifier_token_key" ON "facilities_db"."VerificationToken" ("identifier","token");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "idx_30165_VerificationToken_token_key" ON "facilities_db"."VerificationToken" ("token");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."ReservationFees" ADD CONSTRAINT "ReservationFees_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "facilities_db"."Reservation"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "facilities_db"."User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Category" ADD CONSTRAINT "Category_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities_db"."Facility"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Events" ADD CONSTRAINT "Events_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities_db"."Facility"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."InsuranceFiles" ADD CONSTRAINT "InsuranceFiles_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "facilities_db"."Reservation"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "facilities_db"."User"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Reservation" ADD CONSTRAINT "Reservation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "facilities_db"."Category"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Reservation" ADD CONSTRAINT "Reservation_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "facilities_db"."Facility"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "facilities_db"."User"("id") ON DELETE restrict ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."ReservationDate" ADD CONSTRAINT "ReservationDate_gcal_eventid_fkey" FOREIGN KEY ("gcal_eventid") REFERENCES "facilities_db"."Events"("id") ON DELETE no action ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "facilities_db"."ReservationDate" ADD CONSTRAINT "ReservationDate_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "facilities_db"."Reservation"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

*/