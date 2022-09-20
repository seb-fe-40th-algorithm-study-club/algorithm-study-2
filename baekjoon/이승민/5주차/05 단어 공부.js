const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().toUpperCase();

const obj = {};
for( let i = 0; i < input.length; i++ ){
    if ( !obj[input[i]] ){
        obj[input[i]] = 1;
    } else {
        obj[input[i]] = obj[input[i]] + 1;
    }
}

const max = Math.max(...Object.values(obj));
let result;
for( let key in obj ){
    if ( obj[key] === max ){
        result === undefined ? result = key : result = '?'
    }
}
console.log(result)
