//Problem Statement: You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1]. The floor of x is the largest element in the array which is smaller than or equal to x. The ceiling of x is the smallest element in the array greater than or equal to x

const floor = (nums, target) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) return nums[i];
    else if (nums[i] < target) return nums[i];
  }
  return 0;
};

console.log(floor([10, 20, 30, 40, 50], 19));

//-----------------------------------------

const binaryFloor = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let floor = -Infinity;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return nums[mid];
    else if (nums[mid] < target) {
      floor = Math.max(nums[mid], floor);
      left = mid + 1;
    } else right = mid - 1;
  }

  return floor;
};

console.log(binaryFloor([10, 20, 30, 40, 50], 40));
