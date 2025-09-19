"use client";

import { Card, CardContent } from "@repo/ui/components/card";

interface WeatherCardProps {
  city: string;
  temperature: number;
  condition: string;
}

export function WeatherCard({ city, temperature, condition }: WeatherCardProps) {
  return (
    <Card className="rounded-2xl shadow-md bg-gradient-to-br from-blue-500 to-blue-700 text-white">
      <CardContent className="p-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-semibold">{city}</h2>
        <p className="text-6xl font-bold mt-2">{temperature}°C</p>
        <p className="text-lg mt-1">{condition}</p>
      </CardContent>
    </Card>
  );
}
