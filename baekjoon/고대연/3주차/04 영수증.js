let input = require('fs').readFileSync('./input.txt').toString().split('\n');

function solution(input) {
    let total = Number(input[0]);

    for (let i = 2; i < Number(input[1]) +2; i++) {
        let products = input[i].split(' ');
        total -= Number(products[0]) * Number(products[1]);
    }
    if (total === 0)
        console.log("Yes")
    else
        console.log("No");

}

solution(input);
