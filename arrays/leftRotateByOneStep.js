// Left Rotate the Array by One

//  nums = [1, 2, 3, 4, 5]

//  [2, 3, 4, 5, 1]

//O(N)
//O(1) - Extra Space

const leftRotateByOne = (nums) => {
  const n = nums.length;
  let i = 0;
  const temp = nums[0];
  while (i < n) {
    nums[i] = nums[i + 1];
    i++;
  }
  nums[n - 1] = temp;
  return nums;
};

console.log(leftRotateByOne([1, 2, 3, 4, 5]));
