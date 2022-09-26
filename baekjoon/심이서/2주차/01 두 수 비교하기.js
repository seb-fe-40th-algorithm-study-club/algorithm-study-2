const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);

if (a > b) {
  console.log(">");
}

if (a < b) {
  console.log("<");
}

if (a === b) {
  console.log("==");
}
