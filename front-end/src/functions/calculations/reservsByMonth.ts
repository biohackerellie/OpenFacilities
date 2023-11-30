"use server"
import { ReservationWithAll } from "@/lib/types";

export default function ({data} : {data: ReservationWithAll[]}) {
	// calculate 6 months ago

	const now = new Date();
	const sixMonthsAgo = new Date();

	//filter data within the last 6 months
	const recentData = data.filter(reservation => 
		new Date(reservation.ReservationDate[0].startDate) > sixMonthsAgo)

		// Aggregate Data
		const aggregateData = {}
		recentData.forEach(reservation => {
			const month = new Date(reservation.createdAt).toLocaleString('default', {month: 'long'})
		})

