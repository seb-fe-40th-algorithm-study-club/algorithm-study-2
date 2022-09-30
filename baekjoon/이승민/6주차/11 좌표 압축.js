const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const length = input.shift();
const arr = input[0].split(' ').map(Number);

const result = [];
const sorted = Array.from(new Set(arr)).sort((a, b) => a- b);
const object = {};

sorted.forEach((el, idx) => object[el] = idx);
 for(let i = 0; i < length; i++){
    result.push(object[arr[i]])
 }
console.log(result.join(' '))