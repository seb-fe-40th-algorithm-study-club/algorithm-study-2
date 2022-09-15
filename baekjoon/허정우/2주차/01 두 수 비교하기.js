const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().split(" ").map(Number);

let result = '';
let [a,b] = input;

if (a < b) result = "<";
else if (a > b) result = ">";
else result = "==";

console.log(result);