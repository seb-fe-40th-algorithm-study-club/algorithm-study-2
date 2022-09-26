//둘다 양수일때 1
//x가 음수일때 2
//둘다 음수일때 3
//y가 음수일때 4
const [x, y] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (x > 0) y > 0 ? console.log(1) : console.log(4);
if (x < 0) y > 0 ? console.log(2) : console.log(3);
