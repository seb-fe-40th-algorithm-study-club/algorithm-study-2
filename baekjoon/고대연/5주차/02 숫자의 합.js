let input = require('fs').readFileSync('../input.txt').toString().split('\n');

function solution(input){

    String.prototype.reduce = Array.prototype.reduce;
    console.log( input[1].reduce((a,b) => parseInt(a)+parseInt(b)))
    
}

solution(input);
