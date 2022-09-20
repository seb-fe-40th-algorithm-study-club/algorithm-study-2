const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const indexArr = [];
for(let i = 0; i < alphabet.length; i++){
    let idx = input.indexOf(alphabet[i]);
    indexArr.push(idx);
}
console.log(indexArr.join(' '));