// Pattern 10
//
// A B C D C B A
// A B C   C B A
// A B       B A
// A           A

const pattern = () => {
  let pattern = "";
  for (let i = 0; i < 4; i++) {
    let k = 65;
    for (let j = 0; j < 7; j++) {
      if (j <= 3 - i || j >= 3 + i) {
        pattern = pattern + String.fromCharCode(k);
        j < 3 ? k++ : k--;
      } else pattern = pattern + " ";
    }
    pattern = pattern + "\n";
  }
  return pattern;
};

console.log(pattern());
