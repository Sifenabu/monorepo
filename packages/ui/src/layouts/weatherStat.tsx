"use client";

import { Card, CardContent } from "@repo/ui/components/card";
import { LucideIcon } from "lucide-react";

interface WeatherStatProps {
  label: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
}

export function WeatherStat({ label, value, unit, icon: Icon }: WeatherStatProps) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardContent className="p-4 flex items-center gap-3">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600">
          <Icon className="w-5 h-5" />
        </div>

        {/* Text */}
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <h3 className="text-lg font-bold">
            {value}
            {unit ? ` ${unit}` : ""}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
}
