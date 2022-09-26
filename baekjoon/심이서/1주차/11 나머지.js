const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(" ");
//첫째 줄에 (A+B)%C,
//둘째 줄에 ((A%C) + (B%C))%C
//셋째 줄에 (A×B)%C
//넷째 줄에 ((A%C) × (B%C))%C를 출력
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
