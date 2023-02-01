export const fetchResults = async ({ q, limit = 4 }) => {
  const options = new URLSearchParams({ q, limit }).toString();
  const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?${options}`);
  const data = await response.json();
  return data.results;
};

export const getInfoId = async (id) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await response.json();
  return data;
};

export const getInfoIdDescription = async (id) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
  const data = await response.json();
  return data;
};
