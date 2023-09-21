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
        const facility = await prisma.facility.create({
          data: {
            name: facilityData.name,
            building: facilityData.building,
            address: facilityData.address,
            imagepath: facilityData.image_path || null,
            capacity: facilityData.capacity || null,
            googlecalendarid: facilityData.calendar_id,
          },
        });

        const categoriesData = facilityData.categories || [];

        for (const categoryData of categoriesData) {
          categoryData.price = parseFloat(
            categoryData.price.replace('$', '').split('/hr')[0]
          );
          const category = await prisma.category.create({
            data: {
              ...categoryData,
              facility: {
                connect: {
                  id: facility.id,
                },
              },
            },
          });
        }

        for (const optionName of commonOptions) {
          let option = await prisma.option.findFirst({
            where: {
              name: optionName,
            },
          });

          if (!option) {
            option = await prisma.option.create({
              data: {
                name: optionName,
              },
            });
          }

          await prisma.facility.update({
            where: {
              id: facility.id,
            },
            data: {
              Option: {
                connect: {
                  id: option.id,
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
