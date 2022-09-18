let input = require('fs').readFileSync('../input.txt').toString().split('\n');


function solution(input) {

    let temp  = input.shift();
    // for(let i = 1 ; i< input.length; i++ )로 하면 TypeError가 남,,
    for (let i = 1; i < temp; i++) {

        let [num, data] = input[i].split(" ");
        let sentence = "";

        for (let j = 0; j < data.length; j++) {
            for (let k = 0; k < num; k++) {
                sentence = sentence + data[j];
            }
        }
        console.log(sentence);
    }

}

solution(input);
