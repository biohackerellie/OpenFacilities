const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

const commonOptions = [
  'chairs',
  'computers',
  'microphones',
  'speakers',
  'projector / TV',
  'tables',
  'Custodian',
  'Tech Support',
];

async function populateDBWithFacilities() {
  const facilitiesDirectory = path.join(__dirname, '..', '/src/lib/facilities');

  const files = fs.readdirSync(facilitiesDirectory);

  for (const file of files) {
    if (file.endsWith('.json')) {
      const filePath = path.join(facilitiesDirectory, file);
      const facilities = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      for (const facilityData of facilities) {
        const facility = await prisma.Facility.create({
          data: {
            name: facilityData.name,
            building: facilityData.building,
            address: facilityData.address,
            imagePath: facilityData.image_path || null,
            capacity: facilityData.capacity || null,
            googleCalendarId: facilityData.calendar_id || null,
          },
        });

        const categoriesData = facilityData.categories || [];

        for (const categoryData of categoriesData) {
          categoryData.price = parseFloat(
            categoryData.price.replace('$', '').split('/hr')[0]
          );
          const category = await prisma.Category.create({
            data: {
              ...categoryData,
              Facility: {
                connect: {
                  id: facility.id,
                },
              },
            },
          });
        }
      }
    }
  }
}

populateDBWithFacilities()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
