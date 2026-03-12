//Pattern 7
//
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

const pattern = () => {
  let str = "";
  for (let i = 0; i < 5; i++) {
    let k = 1;
    for (let j = 0; j < 9; j++) {
      if (j >= 4 - i && j <= 4 + i && k) {
        str = str + "*";
        k = 0;
      } else {
        str = str + " ";
        k = 1;
      }
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());
