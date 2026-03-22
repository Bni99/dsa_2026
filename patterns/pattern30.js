//Pattern30

// 0
// 0 1
// 0 2 4
// 0 3 6 9
// 0 4 8 12 16

const pattern = () => {
  let str = "";
  for (let i = 0; i < 5; i++) {
    let m = 0;
    for (let j = 0; j < 5; j++) {
      if (j <= i) {
        str = str + m;
        m = m + i;
      } else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};
console.log(pattern());
