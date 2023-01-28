export const fetchResults = async (searchTerm) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchTerm}`);
  const data = await response.json();
  return data.results;
};
