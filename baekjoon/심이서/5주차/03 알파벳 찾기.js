const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath, "utf8").trim();

//포함=> 등장 위치 없으면 -1
let alp = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let boolean = Array(alp.length).fill(-1);
for (let i = 0; i <= alp.length; i++) {
  if (input.includes(alp[i])) {
    boolean[i] = input.indexOf(alp[i]);
  }
}

console.log(boolean.join(" "));
