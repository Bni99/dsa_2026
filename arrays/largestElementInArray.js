const largestElement = (arr) => {
  let max = -Infinity; //Prefer using Infinity as more prefered way of nomenclature
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

console.log(largestElement([5, 0, 10, 8, 17, 1]));
