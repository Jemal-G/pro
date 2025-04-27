
// app/components/LocationFinderServer.tsx
import { headers } from "next/headers";

export default async function LocationFinderServer() {
  // 1. grab the X-Forwarded-For header (may contain “client, proxy, proxy…”)
  const hdrs = headers();
  const fwd = hdrs.get("x-forwarded-for") ?? "";
  const clientIp = fwd.split(",")[0].trim() || "";

  // 2. build the URL: if we got an IP, look that one up; otherwise fall back
  const url = clientIp
    ? `https://ipinfo.io/${clientIp}/json`
    : `https://ipinfo.io/json`;

  // 3. fetch & parse
  const res = await fetch(url, { cache: "no-store" });
  const locationData = await res.json();

  return (
    <h1>Hello from {locationData.city} server component</h1>
  );
}
