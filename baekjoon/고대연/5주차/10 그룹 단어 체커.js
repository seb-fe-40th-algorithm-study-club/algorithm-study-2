let [len,...input] = require('fs').readFileSync('../input.txt').toString().split("\n");

function solution(input) {
   
    let count = 0;
    for (let i = 0; i < len; i++) {

        let alphabets = [input[i][0]];
        let bool = true;
        let lastalphabets = input[i][0];
        for (let j = 1; j < input[i].length; j++) {
            if (lastalphabets !== input[i][j]) {

                if (!alphabets.includes(input[i][j])) {
                    alphabets.push(input[i][j]);
                }
                else {
                    bool = false;
                    break;
                }
            }
            lastalphabets = input[i][j];
        }

        if (bool)
            count++;
    }

    console.log(count);

}

solution(input);
