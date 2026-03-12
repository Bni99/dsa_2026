//So here we are going to print this pattern :
//
// * * * *
// * * * *
// * * * *
// * * * *

const patternOne = (n) => {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern = pattern + "*";
    }
    pattern = pattern + "\n";
  }
  return pattern;
};

console.log(patternOne(2));
