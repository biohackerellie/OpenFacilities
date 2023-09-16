const { PrismaClient: PrismaClientMySql } = require('@prisma/client');
const { PrismaClient: PrismaClientPostgres } = require('@prisma/client');

const prismaMySQL = new PrismaClientMySql({
  datasources: {
    db: {
      url: 'mysql://root:yXaFFJQ9SspRWkN6tmktZDB@10.50.1.4:3306/facilities_db',
    },
  },
});

const prismaPostgres = new PrismaClientPostgres({
  datasources: {
    db: {
      url: 'postgres://postgres:password@127.0.0.1:5432/postgres',
    },
  },
});

async function migrateData() {
  // Migrate tables with no dependencies first
  await migrateOptions();
  await migrateUsers();
  await migrateFacilities();
  await migrateCategories();
  await migrateEvents();

  // Migrate tables with dependencies
  await migrateAccounts();
  await migrateSessions();
  await migrateReservations();
  await migrateInsuranceFiles();
  await migrateReservationFees();
  await migrateReservationDates();
}

async function migrateOptions() {
  const options = await prismaMySQL.option.findMany();
  for (const option of options) {
    await prismaPostgres.option.create({ data: option });
  }
}

async function migrateUsers() {
  const users = await prismaMySQL.user.findMany();
  for (const user of users) {
    await prismaPostgres.user.create({ data: user });
  }
}

async function migrateFacilities() {
  const facilities = await prismaMySQL.facility.findMany();
  for (const facility of facilities) {
    await prismaPostgres.facility.create({ data: facility });
  }
}

async function migrateCategories() {
  const categories = await prismaMySQL.category.findMany();
  for (const category of categories) {
    await prismaPostgres.category.create({ data: category });
  }
}

async function migrateEvents() {
  const events = await prismaMySQL.events.findMany();
  for (const event of events) {
    await prismaPostgres.events.create({ data: event });
  }
}

async function migrateAccounts() {
  const accounts = await prismaMySQL.account.findMany();
  for (const account of accounts) {
    await prismaPostgres.account.create({ data: account });
  }
}

async function migrateSessions() {
  const sessions = await prismaMySQL.session.findMany();
  for (const session of sessions) {
    await prismaPostgres.session.create({ data: session });
  }
}

async function migrateReservations() {
  const reservations = await prismaMySQL.reservation.findMany();
  for (const reservation of reservations) {
    await prismaPostgres.reservation.create({ data: reservation });
  }
}

async function migrateInsuranceFiles() {
  const insuranceFiles = await prismaMySQL.insuranceFiles.findMany();
  for (const insuranceFile of insuranceFiles) {
    await prismaPostgres.insuranceFiles.create({ data: insuranceFile });
  }
}

async function migrateReservationFees() {
  const reservationFees = await prismaMySQL.reservationFees.findMany();
  for (const reservationFee of reservationFees) {
    await prismaPostgres.reservationFees.create({ data: reservationFee });
  }
}

async function migrateReservationDates() {
  const reservationDates = await prismaMySQL.reservationDate.findMany();
  for (const reservationDate of reservationDates) {
    await prismaPostgres.reservationDate.create({ data: reservationDate });
  }
}

migrateData()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaMySQL.$disconnect();
    await prismaPostgres.$disconnect();
  });
