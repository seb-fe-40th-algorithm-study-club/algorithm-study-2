const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .replace(/\n|\r/g, "");

let a = parseInt(input.slice(0, 3));
let b = input.slice(3);

let [b1, b2, b3] = b.split("");

let num = a * parseInt(b3);
let num2 = a * parseInt(b2);
let num3 = a * parseInt(b1);
let num4 = num + parseInt(`${num2}0`) + parseInt(`${num3}00`);

console.log(`${num}\n${num2}\n${num3}\n${num4}`);
