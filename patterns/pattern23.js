//Pattern 23
//
// A
// B A
// C B A
// D C B A

const pattern = () => {
  let str = "";
  let k = 65;
  for (let i = 0; i < 4; i++) {
    let m = 0;
    for (let j = 0; j < 4; j++) {
      if (j <= i) {
        str = str + String.fromCharCode(k - m);
        m++;
      } else str = str + " ";
    }
    k++;
    str = str + "\n";
  }
  return str;
};

console.log(pattern());
