import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Events } from "@prisma/client";


export const runtime = 'edge';

export async function POST(request: NextRequest) {

	try{
	const { events } = await request.json();

	const oneMonthAgo = new Date();
	oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);


	const databaseEvents = await prisma.events.findMany({
		cacheStrategy: { swr: 60, ttl: 60 }
	});

	const eventsToDelete = databaseEvents
  .filter(event => new Date(event.start || '') < oneMonthAgo)
  .map(event => event.id);

	await prisma.events.deleteMany({
		where: {
			id: {
				in: eventsToDelete,
			},
		}
	})

const eventsToCreate = events
  .filter((eventData : Events) => !databaseEvents.some(e => e.id === eventData.id))
  .map((eventData : Events) => ({
    id: eventData.id,
    title: eventData.title,
    start: eventData.start,
    end: eventData.end,
    facilityId: BigInt(eventData.facilityId),
  }));

	const response = await prisma.events.createMany({
		data: eventsToCreate,
		skipDuplicates: true,
	});



	
	return NextResponse.json(response);
	} catch (error) {
		console.error(error);
		return NextResponse.json(error);
	}
} 
	
