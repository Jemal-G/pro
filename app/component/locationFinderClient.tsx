"use client";
import { useEffect, useState } from "react";

export default function LocationFinderClient() {
  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        // reverse-geocode those coords into a city name:
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
        );
        const data = await res.json();
        setCity(data.address.city || data.address.town || data.address.village);
      },
      (err) => console.error("Geolocation error:", err),
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <h1>
      Hello from {city ?? "…detecting location…"} client component
    </h1>
  );
}
