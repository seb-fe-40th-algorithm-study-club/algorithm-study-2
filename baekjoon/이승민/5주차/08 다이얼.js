const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

const dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
let time = 0;
for (let i = 0; i < input.length; i++) {
  for (let key in dial) {
    if(key.indexOf(input[i]) !== -1) {
        time = time + dial[key];
        break;
    }
  }
}
console.log(time)
