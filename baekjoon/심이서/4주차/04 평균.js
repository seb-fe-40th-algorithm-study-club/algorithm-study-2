const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

let num = input[1].split(" ").map(Number);
let max = Math.max(...num);

let result = num.map((el) => (el / max) * 100);
const sum = result.reduce((acc, cur) => {
  return acc + cur;
});
console.log(sum / Number(input[0]));
