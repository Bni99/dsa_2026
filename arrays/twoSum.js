//TC : O(N*N)
//SC : O(1)

const bruteTwoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [-1, -1];
};

console.log(bruteTwoSum([2, 6, 5, 8, 11], 14));

//------------------------------------
// TC : O(N)
// SC : O(N)

const betterTwoSum = (arr, target) => {
  const obj = {};
  let i = 0;
  while (i < arr.length) {
    const complement = target - arr[i];
    if (obj[complement] !== undefined) {
      return [obj[complement], i];
    }
    obj[arr[i]] = i;
    i++;
  }
  return [-1, -1];
};

console.log(betterTwoSum([2, 6, 5, 8, 11], 14));

//--------------------------------------------
