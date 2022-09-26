const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split(" ");

//킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개
//몇 개를 더하거나 빼야 올바른 세트가 되는지
//수가 양수라면더하고, 음수면 제거
let piece = [1, 1, 2, 2, 2, 8];

let result = piece.map((el, i) => el - parseInt(input[i]));
console.log(...result);
