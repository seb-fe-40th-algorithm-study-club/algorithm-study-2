const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

//이차원 배열로
input.shift();
const coor = input.map((el) => el.split(" ").map(Number));

const result = coor.sort((a, b) => {
  if (a[1] > b[1]) {
    return 1;
  } else if (a[1] < b[1]) {
    return -1;
  } else {
    return a[0] - b[0];
  }
});

let a = "";
result.forEach((el) => {
  a = a + `${el[0]} ${el[1]}\n`;
});

console.log(a);