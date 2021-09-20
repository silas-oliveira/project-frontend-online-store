export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await request.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryID, query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}&q=${query}`);
  const response = await request.json();
  return response;
}
