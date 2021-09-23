const SHOPPING_CART_KEY = 'shopping_cart';

export function addToCart(obj) {
  const contentLocalStorage = localStorage.getItem(SHOPPING_CART_KEY);
  const myArrOfObj = contentLocalStorage ? JSON.parse(contentLocalStorage) : [];
  const updArr = obj ? [...myArrOfObj, obj] : myArrOfObj;
  localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(updArr));
  // console.log(JSON.stringify(updArr));
}

export function subToCart(obj) {
  const contentLocalStorage = localStorage.getItem(SHOPPING_CART_KEY);
  console.log(contentLocalStorage);
  const myArrOfObj = contentLocalStorage ? JSON.parse(contentLocalStorage) : [];
  const UpdArr = myArrOfObj
    .splice(myArrOfObj.indexOf((content) => content.id === obj.id), 1);
  console.log(UpdArr);
  localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(UpdArr));
}
// export function subFromCart(obj) {
//   const contentLocalStorage = localStorage.getItem(SHOPPING_CART_KEY);
//   const myArrOfObj = JSON.parse(contentLocalStorage);
//   const indexObj = myArrOfObj.findIndex((curObj) => curObj.id === obj.id);
//   // const updArr = myArrOfObj;
//   if (indexObj >= 0) {
//     // let removed = updArr.splice(indexObj, 1);
//     myArrOfObj.splice(indexObj, 1);
//   }
//   localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(updArr));
//   // console.log(JSON.stringify(updArr));
// }

export function sumFromCart(obj) {
  const contentLocalStorage = localStorage.getItem(SHOPPING_CART_KEY);
  const myArrOfObj = JSON.parse(contentLocalStorage);
  return myArrOfObj.reduce((acc, curObj) => {
    if (curObj.id === obj.id) {
      acc += 1;
    }
    return acc;
  }, 0);
}

export function getFromCart() {
  const contentLocalStorage = localStorage.getItem(SHOPPING_CART_KEY);
  const myArrOfObj = contentLocalStorage ? JSON.parse(contentLocalStorage) : [];
  return myArrOfObj;
}
