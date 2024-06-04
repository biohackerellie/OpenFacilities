'use client';

import React from 'react';
import type { RevenueData } from '@/lib/types';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

export default function MonthlyRevChart({ data }: { data: RevenueData[] }) {
  return (
    <>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray={'3 3'} />
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
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="Revenue" fill="#22c55e">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#22c55e" />
            ))}
          </Bar>
          <Bar dataKey="Loss" fill="#ff0000" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
