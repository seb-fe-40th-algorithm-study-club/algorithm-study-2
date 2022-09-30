const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);
const length = input.shift();
const numbers = input.sort((a, b) => a-b);
const avg = Math.round((numbers.reduce((acc, cur) => acc+cur))/length);
const center = numbers[Math.floor(length/2)];
let most;
const obj = {};
numbers.forEach(el => {
    if(!obj[el]){
        obj[el] = 1;
    } else {
        obj[el] ++;
    }
});
const maxObjVal = Math.max(...Object.values(obj));
const keyArr = [];
if( maxObjVal === 1 ){
   length !== 1 ? most = numbers[1] : most = numbers[0]
} else {
    for(let key in obj){
        if(obj[key] === maxObjVal){
            keyArr.push(key);
        }
    }

    keyArr.length === 1 ? most = Number(keyArr[0]) : most = (keyArr.map(Number)).sort((a, b) => a-b)[1];
}
const range = numbers[length-1] - numbers[0];

console.log(`${avg}
${center}
${most}
${range}`)