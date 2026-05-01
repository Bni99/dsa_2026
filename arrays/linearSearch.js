// Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
//  arr[] = 1 2 3 4 5, num = 3

//O(N)
//O(1)

const linearSearch = (nums, d) => {
  const n = nums.length;
  let i = 0;
  while (i < n) {
    if (nums[i] === d) return i;
    i++;
  }
  return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5], 2));
