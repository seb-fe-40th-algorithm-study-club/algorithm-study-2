let [num, ...input] = require('fs').readFileSync('../input.txt').toString().trim().split('\n').map(el => +el);
input = input.sort((a,b) => a-b)
let avg = Math.round(input.reduce((acc, cur) => acc + cur) / input.length);
let mid = input[Math.floor(input.length / 2)];
let diff = input[input.length - 1] - input[0];

let fre;
let obj = {}
for (let i = 0; i < input.length; i++) {
    if (!obj[input[i]])
        obj[input[i]] = 1;
    else
        obj[input[i]]++;
}

let keys = Object.keys(obj);
let high = keys[0];
for (let i = 0; i < keys.length; i++) {
    if (obj[high] < obj[keys[i]]) {
        high = keys[i];
    }
}
keys = keys.sort((a, b) => a - b);

let highkeys = keys.filter(el => obj[el] === obj[high]);
if (highkeys.length > 1) {
    fre = highkeys[1];
}
else
    fre = high;



console.log(avg === -0 ? 0 : avg)
console.log(mid)
console.log(fre)
console.log(diff)


