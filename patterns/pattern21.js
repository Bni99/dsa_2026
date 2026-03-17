// Pattern 21
//
// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0

const pattern = () => {
  let str = "";
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (j <= i) {
        if (j % 2 === 0) str = str + 1;
        else str = str + 0;
      } else str = str + " ";
    }
    str = str + "\n";
  }
  return str;
};

console.log(pattern());
