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
		cacheStrategy: { swr: 86400, ttl: 86400 }
	});

	const deleteOldEvents = databaseEvents
	.filter(event => new Date(event.start || '') < oneMonthAgo)
	.map(event => prisma.events.delete({ where: { id: event.id } }));

const createNewEvents = events.map((eventData: Events) => {
	if (!databaseEvents.some(e => e.id === eventData.id)) {
		return prisma.events.create({
			data: {
				id: eventData.id,
				title: eventData.title,
				start: eventData.start,
				end: eventData.end,
				facilityId: BigInt(eventData.facilityId),
			}
		});
	}
}).filter(Boolean);
	await prisma.$transaction([...deleteOldEvents, ...createNewEvents]);
	return NextResponse.json({ status: 200, message: 'success' });
	} catch (error) {
		console.error(error);
		return NextResponse.json(error);
	}
} 
	
