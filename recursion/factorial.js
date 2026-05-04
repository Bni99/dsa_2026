const factorial = (n) => {
  if (n === 1) return 1;
  const ans = n * factorial(n - 1);
  return ans;
};

console.log(factorial(5));
