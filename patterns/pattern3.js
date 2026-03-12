//So now we are going to print this pattern
//
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
//

const pattern = () => {
  let str = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (j >= 4 - i) str = str + "*";
      else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());
