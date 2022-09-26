const [h, m] = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(" ")
  .map(Number);

let min = m;
let hour = h;

min -= 45;
//45뺀값이 음수일때 60더한값이 분
if (min < 0) {
  min += 60;
  hour--;

  if (hour === -1) {
    hour = 23;
  }
}
console.log(`${hour} ${min}`);
