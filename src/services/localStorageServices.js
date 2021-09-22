export function addToCart(obj) {
  const updArr = [...myArrOfObj, obj];
  return updArr;
}

export function subFromCart(obj) {
  const updArr = myArrOfObj;
  const indexOjb = myArrOfObj.findIndex((curObj) => curObj.id === obj.id);
  if (indexOjb >= 0) {
    removed = updArr.splice(indexOjb, 1);
  }
  return updArr;
}

export function sumFromCart(obj) {
  const count = myArrOfObj.reduce((acc, curObj) => {
    if (curObj.id === obj.id) {
      acc += 1;
    }
    return acc;
  }, 0);
  return count;
}
