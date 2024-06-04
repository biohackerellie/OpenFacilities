'use client';

import React from 'react';
import type { ChartData } from '@/lib/types';
import { ReservationWithAll } from '@/lib/types';

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

const buildingColors = [
  { building: 'West Elementary', color: '#800080' },
  { building: 'South Elementary', color: '#0000FF' },
  { building: 'Laurel Middle School', color: '#008000' },
  { building: 'Laurel High School', color: '#87CEEB' },
  { building: 'Graff Elementary', color: '#FFC0CB' },
  { building: 'Administration Building', color: '#FFA500' },
];

export default function ByMonthLine({ data }: { data: ChartData[] }) {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Legend />
          {buildingColors.map((buildingColor) => (
            <Line
              connectNulls
              key={buildingColor.building}
              type="monotone"
              dataKey={buildingColor.building}
              stroke={buildingColor.color}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
