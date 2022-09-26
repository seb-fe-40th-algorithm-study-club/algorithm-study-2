const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim().split("\n");

let arr = (input[1] + "").split("");
let result = arr.reduce((acc, cur) => {
  return Number(acc) + Number(cur);
}, 0);
console.log(result);
