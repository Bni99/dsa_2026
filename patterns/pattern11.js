// Pattern 11
//
//       *
//     * * *
//   * * * * *
// * * * * * * *
//   * * * * *
//     * * *
//       *

const pattern = () => {
  let pattern = "";
  for (let i = 0; i < 7; i++) {
    let k = 65;
    for (let j = 0; j < 7; j++) {
      if (i <= 3) {
        if (j >= 3 - i && j <= 3 + i) {
          pattern = pattern + "*";
        } else {
          pattern = pattern + " ";
        }
      } else {
        if (j >= i - 3 && j <= 9 - i) {
          pattern = pattern + "*";
        } else {
          pattern = pattern + " ";
        }
      }
    }
    pattern = pattern + "\n";
  }
  return pattern;
};

console.log(pattern());
