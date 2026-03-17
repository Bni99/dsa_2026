//  Pattern 19
//
//    * * * * *
//   * * * * *
//  * * * * *
// * * * * *

const pattern = () => {
  let str = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
      if (j >= 3 - i && j <= 7 - i) str = str + "*";
      else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());
