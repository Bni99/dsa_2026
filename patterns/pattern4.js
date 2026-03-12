//Pattern 4
//
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

const pattern = () => {
  let str = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (j >= i) str = str + "*";
      else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());
