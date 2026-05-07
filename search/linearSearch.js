// O(N)

const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }
  return -1;
};

console.log(linearSearch([4, 9, 2, 0, 1], 0));
