// Print n to 1

const print = (num) => {
  if (num === 0) return;
  console.log(num);
  print(num - 1);
};

// print(10);

// Print 1 to n

const printY = (num) => {
  if (num === 0) return;
  printY(num - 1);
  console.log(num);
};

printY(10);
