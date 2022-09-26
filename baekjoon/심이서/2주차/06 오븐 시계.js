const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(/\s+/)
  .map(Number);

let h = a;
let m = b;
let time = c;

m += time;
while (m >= 60) {
  m -= 60;
  h++;
}

h %= 24;

console.log(`${h} ${m}`);
