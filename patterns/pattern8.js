//Pattern8
//
// * * * * * * * * *
// * * * *   * * * *
// * * *       * * *
// * *           * *
// *               *
//

const pattern = () => {
  let str = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 9; j++) {
      if ((j >= 0 && j <= 4 - i) || (j >= 4 + i && j <= 8)) str = str + "*";
      else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());
