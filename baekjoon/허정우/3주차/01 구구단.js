const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

for (let i = 1; i < 10; i++) {
  console.log(`${input[0]} * ${i} = ${input[0] * i}`);
}
