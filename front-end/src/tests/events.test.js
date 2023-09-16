const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fetch = require('node-fetch');
const moment = require('moment-timezone');
require('dotenv').config();

describe('events.js', () => {
  beforeAll(async () => {
    // Clear the database before running the tests
    await prisma.events.deleteMany();
    await prisma.facility.deleteMany();
  });

  afterAll(async () => {
    // Disconnect Prisma client after running the tests
    await prisma.$disconnect();
  });

  it('should fetch events for all facilities', async () => {
    // Create some facilities in the database
    const facility1 = await prisma.facility.create({
      data: {
        name: 'Facility 1',
        building: 'Building 1',
        googleCalendarId: 'calendar1',
      },
    });
    const facility2 = await prisma.facility.create({
      data: {
        name: 'Facility 2',
        building: 'Building 2',
        googleCalendarId: 'calendar2',
      },
    });

    // Mock the response from the Google Calendar API
    const mockResponse1 = [
      {
        id: 'event1',
        summary: 'Event 1',
        start: { dateTime: '2022-01-01T10:00:00Z' },
        end: { dateTime: '2022-01-01T12:00:00Z' },
        location: 'Location 1',
      },
      {
        id: 'event2',
        summary: 'Event 2',
        start: { dateTime: '2022-01-02T10:00:00Z' },
        end: { dateTime: '2022-01-02T12:00:00Z' },
        location: 'Location 2',
      },
    ];
    const mockResponse2 = [
      {
        id: 'event3',
        summary: 'Event 3',
        start: { dateTime: '2022-01-03T10:00:00Z' },
        end: { dateTime: '2022-01-03T12:00:00Z' },
        location: 'Location 3',
      },
      {
        id: 'event4',
        summary: 'Event 4',
        start: { dateTime: '2022-01-04T10:00:00Z' },
        end: { dateTime: '2022-01-04T12:00:00Z' },
        location: 'Location 4',
      },
    ];
    jest.spyOn(global, 'fetch').mockImplementation((url) => {
      if (url.endsWith('calendar1')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse1),
        });
      } else if (url.endsWith('calendar2')) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse2),
        });
      } else {
        return Promise.resolve({
          ok: false,
          text: () => Promise.resolve('Not found'),
        });
      }
    });

    // Call the main function
    await main();

    // Check that the events were added to the database
    const events = await prisma.events.findMany();
    expect(events).toHaveLength(4);
    expect(events).toContainEqual(
      expect.objectContaining({
        id: 'event1',
        title: 'Event 1',
        start: expect.any(Date),
        end: expect.any(Date),
        location: 'Location 1',
        recurringEventId: null,
        facilityId: facility1.id,
      })
    );
    expect(events).toContainEqual(
      expect.objectContaining({
        id: 'event2',
        title: 'Event 2',
        start: expect.any(Date),
        end: expect.any(Date),
        location: 'Location 2',
        recurringEventId: null,
        facilityId: facility1.id,
      })
    );
    expect(events).toContainEqual(
      expect.objectContaining({
        id: 'event3',
        title: 'Event 3',
        start: expect.any(Date),
        end: expect.any(Date),
        location: 'Location 3',
        recurringEventId: null,
        facilityId: facility2.id,
      })
    );
    expect(events).toContainEqual(
      expect.objectContaining({
        id: 'event4',
        title: 'Event 4',
        start: expect.any(Date),
        end: expect.any(Date),
        location: 'Location 4',
        recurringEventId: null,
        facilityId: facility2.id,
      })
    );
  });

  it('should handle errors when fetching events', async () => {
    // Create a facility in the database
    const facility = await prisma.facility.create({
      data: {
        name: 'Facility',
        building: 'Building',
        googleCalendarId: 'calendar',
      },
    });

    // Mock an error response from the Google Calendar API
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: false,
        text: () => Promise.resolve('Not found'),
      })
    );

    // Call the main function
    await main();

    // Check that no events were added to the database
    const events = await prisma.events.findMany();
    expect(events).toHaveLength(0);
  });
});
