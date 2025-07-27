const STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST || 'http://localhost:1337';
const STRAPI_API_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

export async function query(endpoint: string) {
  const url = `${STRAPI_HOST}/api/${endpoint}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data from Strapi: ${response.statusText}`);
  }

  return response.json();
}