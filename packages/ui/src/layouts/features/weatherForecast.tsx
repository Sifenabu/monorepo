"use client";

import { Card, CardContent } from "@repo/ui/components/card";
import { Sun, CloudRain, Cloud, LucideIcon } from "lucide-react";

interface ForecastItem {
  day: string;
  temp: number;
  condition: string;
}

interface WeatherForecastProps {
  forecast: ForecastItem[];
}

function getConditionIcon(condition: string): LucideIcon {
  switch (condition.toLowerCase()) {
    case "rain":
      return CloudRain;
    case "clouds":
      return Cloud;
    case "clear":
    default:
      return Sun;
  }
}

export function WeatherForecast({ forecast }: WeatherForecastProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {forecast.map((item, i) => {
        const Icon = getConditionIcon(item.condition);
        return (
          <Card key={i} className="rounded-2xl shadow-sm">
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <p className="text-sm text-gray-500">{item.day}</p>
              <Icon className="w-6 h-6 text-blue-500 my-2" />
              <h3 className="text-lg font-bold">{item.temp}°C</h3>
              <p className="text-xs text-gray-400">{item.condition}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
