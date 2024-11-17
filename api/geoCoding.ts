const GEO_API_URL = process.env.GEO_CODING_API_KEY;

export const getCoordinates = async (address: string) => {
  const response = await fetch(
    `https://geocode.maps.co/search?q=${address}&api_key=${GEO_API_URL}`
  );
  const data = await response.json();
  return data;
};
