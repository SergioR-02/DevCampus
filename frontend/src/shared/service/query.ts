const STRAPI_HOST = import.meta.env.VITE_STRAPI_HOST || 'http://localhost:1337';

// Función genérica para consultar cualquier endpoint de la API de Strapi
export async function query(endpoint: string) {
  const url = `${STRAPI_HOST}/api/${endpoint}`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Lanza error si la respuesta no fue exitosa
  if (!response.ok) {
    throw new Error(`Error fetching data from Strapi: ${response.statusText}`);
  }

  // Devuelve el cuerpo de la respuesta parseado como JSON
  return response.json();
}