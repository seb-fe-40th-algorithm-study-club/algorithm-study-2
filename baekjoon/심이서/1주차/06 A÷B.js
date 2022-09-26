const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(" ");

let result = input.reduce((a, b) => a / b);
console.log(result);
