const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

for(let i = 1; i <= input[0]; i++){
    let count = input[i].split(' ')[0];
    let test = input[i].split(' ')[1];
    let result = '';

    for(let j = 0; j < test.length; j++){

        for(let k = 0; k < count; k++){

            result = result + test[j]

        }

    }

    console.log(result)
}