export async function getWeather(city: string) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather fetch failed");

  const data = await res.json();

  // Current weather = first item
  const current = {
    temp: data.list[0].main.temp,
    condition: data.list[0].weather[0].main,
    humidity: data.list[0].main.humidity,
    wind: data.list[0].wind.speed,
  };

  // Hourly (next 6 entries ~ 18 hours)
  const hourly = data.list.slice(0, 6).map((h: any) => ({
    time: new Date(h.dt * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
    }),
    temp: h.main.temp,
    condition: h.weather[0].main,
  }));

  // Daily forecast → group by day
  const daysMap: Record<string, { temps: number[]; condition: string }> = {};
  data.list.forEach((entry: any) => {
    const date = new Date(entry.dt * 1000);
    const day = date.toLocaleDateString("en-US", { weekday: "short" });

    if (!daysMap[day]) {
      daysMap[day] = { temps: [], condition: entry.weather[0].main };
    }
    daysMap[day].temps.push(entry.main.temp);
  });

  const forecast = Object.keys(daysMap).slice(0, 5).map((day) => {
    const avgTemp =
      daysMap[day].temps.reduce((a, b) => a + b, 0) / daysMap[day].temps.length;
    return {
      day,
      temp: Math.round(avgTemp),
      condition: daysMap[day].condition,
    };
  });

  return { current, hourly, forecast };
}
