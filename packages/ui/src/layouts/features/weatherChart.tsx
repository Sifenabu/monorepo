"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface WeatherChartProps {
  data: { time: string; temp: number }[];
}

export function WeatherChart({ data }: WeatherChartProps) {
  return (
    <div className="h-64 w-full bg-white rounded-2xl shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">Upcoming Hours</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="time" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#3b82f6" strokeWidth={3} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
