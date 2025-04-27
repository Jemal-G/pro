

export default async function LocationFinderClient() {

    
    const response = await fetch("https://ipinfo.io/json");
    const locationData = await response.json();
    console.log(locationData);
  const locationInfo = locationData;



return (
  <>
    <h1>Hello from {locationInfo?.city } --server </h1>
  </>
);
}


