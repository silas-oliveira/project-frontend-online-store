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

// DUAS SOLUÇÕES QUE RESULTAM A MESMA COISA DE DUAS FORMAS DIFERENTES
// PARA CONSULTAR UM DETERMINADO 'ID' DE UM PRODUTO NA API DO ML,
// MAS QUE NÃO PASSAM NO TESTE. ENTÃO É NECESSÁRIO IMPLANTAR DIRETAMENTE
// NO COMPONENTE 'ProductDetails'

// export function getProductItemFromMlApi(sku) {
//   return fetch(`https://api.mercadolibre.com/items/${sku}`)
//     .then((response) => response.json())
//     .then((json) => json);
// }

// export async function getProductItemFromMlApi(sku) {
//   const response = await fetch(`https://api.mercadolibre.com/items/${sku}`);
//   const json = await response.json();
//   return json;
// }
