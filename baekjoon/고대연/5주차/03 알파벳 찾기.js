let input = require('fs').readFileSync('../input.txt').toString();
function solution(input){

    for(let i = 97;i<=122;i++){
        console.log(input.indexOf(String.fromCharCode(i)))
    }

}

solution(input);
