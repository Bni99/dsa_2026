const countDigits = (num) => {
  if (num === 0) return 1;
  let ctr = 0;
  while (num) {
    ctr++;
    num = Math.trunc(num / 10);
  }
  return ctr;
};

console.log(countDigits(-236));

//think of corner case like what happens when its zero
// what happens if its negative number
