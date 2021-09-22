const SHOPPING_CART_KEY = 'shopping_cart';

export function addToCart(obj) {
  const contentLocalStorage = localStorage.getItem(SHOPPING_CART_KEY);
  const myArrOfObj = JSON.parse(contentLocalStorage);
  const updArr = obj ? [...myArrOfObj, obj] : myArrOfObj;
  localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(updArr));
  // console.log(JSON.stringify(updArr));
}

export function subFromCart(obj) {
  const contentLocalStorage = localStorage.getItem(SHOPPING_CART_KEY);
  const myArrOfObj = JSON.parse(contentLocalStorage);
  const indexObj = myArrOfObj.findIndex((curObj) => curObj.id === obj.id);
  // const updArr = myArrOfObj;
  if (indexObj >= 0) {
    // let removed = updArr.splice(indexObj, 1);
    myArrOfObj.splice(indexObj, 1);
  }
  localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(updArr));
  // console.log(JSON.stringify(updArr));
}

export function sumFromCart(obj) {
  const contentLocalStorage = localStorage.getItem(SHOPPING_CART_KEY);
  const myArrOfObj = JSON.parse(contentLocalStorage);
  const count = myArrOfObj.reduce((acc, curObj) => {
    if (curObj.id === obj.id) {
      acc += 1;
    }
    return acc;
  }, 0);
  return count;
}

export function getFromCart() {
  const contentLocalStorage = localStorage.getItem(SHOPPING_CART_KEY);
  const myArrOfObj = JSON.parse(contentLocalStorage);
  return myArrOfObj;
}
