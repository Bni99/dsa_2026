//Pattern 13
//
// * * * * * * *
//   * * * * *
//     * * *
//       *
//

const pattern = () => {
  let str = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 7; j++) {
      if (j >= i && j <= 6 - i) str = str + "*";
      else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());
