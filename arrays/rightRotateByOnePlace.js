// Right Rotate the Array by One

//[1,2,3,4,5,6,7]
//[7,1,2,3,4,5,6]

// O(N)
// O(1)

const rightRotateByOne = (nums) => {
  const n = nums.length;
  const temp = nums[n - 1];
  let i = n - 1;
  while (i > 0) {
    nums[i] = nums[i - 1];
    i--;
  }
  nums[0] = temp;
  return nums;
};

console.log(rightRotateByOne([1, 2, 3, 4, 5, 6, 7]));
