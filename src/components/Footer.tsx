import { useEffect, useState } from "react";

interface WeatherData {
  tempC: number;
  tempF: number;
  city: string;
  condition: string;
}

const getGreeting = (tempC: number): string => {
  if (tempC >= 35) return "☀️ Stay cool & hydrated!";
  if (tempC >= 28) return "🌤️ A warm & lovely day!";
  if (tempC >= 20) return "😊 Perfect weather, enjoy!";
  if (tempC >= 10) return "🍂 A crisp, pleasant day!";
  if (tempC >= 0) return "🧣 Bundle up, stay cozy!";
  return "❄️ Brrr… stay warm out there!";
};

const Footer = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch("https://wttr.in/?format=j1", {
          headers: { Accept: "application/json" },
        });
        const data = await res.json();
        const current = data.current_condition?.[0];
        const area = data.nearest_area?.[0];
        if (current && area) {
          setWeather({
            tempC: parseInt(current.temp_C),
            tempF: parseInt(current.temp_F),
            city: area.areaName?.[0]?.value || "Unknown",
            condition: current.weatherDesc?.[0]?.value || "",
          });
        }
      } catch {
        // silently fail
      }
    };
    fetchWeather();
  }, []);

  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Prakash S. Designed with care.
        </p>
        <p className="font-body text-xs text-muted-foreground/60">
          Portfolio contents are for demonstration purposes only.
        </p>
      </div>
      {weather && (
        <div className="container mx-auto mt-4 border-t border-border pt-4 px-6">
          <p className="font-body text-xs text-muted-foreground/70 text-center">
            {weather.tempC}°C / {weather.tempF}°F · {weather.city} — {getGreeting(weather.tempC)}
          </p>
        </div>
      )}
    </footer>
  );
};

export default Footer;
