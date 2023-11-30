'use client';

import React, { useState } from 'react';
import { ReservationWithAll, ChartData } from '@/lib/types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Select } from '@prisma/client/runtime/library';





export default function ByMonthLine({ data }: { data: ReservationWithAll[] }) {

  const sixMonthsAgo = new Date().setMonth(new Date().getMonth() - 6);



  const filteredData = data.filter(
    (reservation) => new Date(reservation.createdAt).getMonth() >= sixMonthsAgo);
	

		
	} 
	)

	
	
	

  return (
		<>
		<ResponsiveContainer width="100%" height={400}> 
			<LineChart data={chartData}>
		</ResponsiveContainer>
		<CartesianGrid strokeDasharray="3 3" />
		<XAxis dataKey="month" />
		<YAxis />
		</>
  );
}
