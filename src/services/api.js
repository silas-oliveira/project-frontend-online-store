export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await request.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryID = '', query = '') {
  if (categoryID !== '' && query !== '') {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}&q=${query}`);
    const response = await request.json();
    return response;
  }
  if (categoryID !== '') {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}`);
    const response = await request.json();
    return response;
  }
  if (query !== '') {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const reponse = await request.json();
    return reponse;
  }
}
