"use client";

import { useEffect, useState } from "react";

export default function LocationFinderClient() {
  const [locationInfo, setLocationInfo] = useState({ city: "" });

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((r) => r.json())
      .then(setLocationInfo)
      .catch(console.error);
  }, []);

  return (
    <h1>Hello from {locationInfo.city} -- client</h1>
  );
}
