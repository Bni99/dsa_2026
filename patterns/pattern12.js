//Pattern 12
//
// *
// * *
// * * *
// * * * *
// * * *
// * *
// *

const pattern = () => {
  let str = "";
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 4; j++) {
      if (i <= 2) {
        if (j <= i) str = str + "*";
        else str = str + " ";
      } else {
        if (j <= 6 - i) str = str + "*";
        else str = str + " ";
      }
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());
