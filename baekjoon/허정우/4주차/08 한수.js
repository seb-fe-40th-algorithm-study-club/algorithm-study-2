let fs = require('fs');
let input = fs.readFileSync('/dev/stdin');

function ap(num) {
  let N = num.toString().split('');
  let n = Number(N.length);
  //let a1 = Number(N.shift());
  let a1 = Number(N[0]);
  let d = num < 10 ? Number(N[0]) : Number(N[1] - N[0]);
  let an = Number(N.pop());

  if (an == a1 + (n - 1) * d) return true;
}

let count = 0;

for (let i = 1; i <= input; i++) {
  if (ap(i)) count++;
}

console.log(count);
