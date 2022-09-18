let input = require('fs').readFileSync('../input.txt').toString().split(" ");
function solution(input){
    input[0] = +reversnum(input[0]);
    input[1] = +reversnum(input[1]);
    console.log(Math.max(...input));
}

function reversnum(sentence){
    let reverse = "";
    for(let i = sentence.length-1 ; i >=0; i--){
        reverse += sentence[i];
    }
    return reverse;
}

solution(input);