let input2 = require('fs').readFileSync('./input.txt').toString().trim();
function solution(input) {
    //string은 readonly
    if (input[1] === undefined) {
        input = 0 + input
    }

    let init = input[0] + input[1];
    let sum = 0;
    let newnum = "";
    let i;

    for (i = 1; ; i++) {

        sum = (Number(input[0]) + Number(input[1])).toString();

        if (sum[1] === undefined) {
            sum = 0 + sum
        }
        newnum = Number(input[1]) + sum.toString()[1];

        if (Number(init) === Number(newnum))
            break;
        else {
            input = newnum;
        }
    }
    console.log(i);
}

// solution(input2);

function solution2(input) {

    let b;
    let c = 0;

    b = Number(input);

    do{
        c++;
        b = (parseInt(b / 10) + b % 10) % 10 + b % 10 * 10;
    }while(Number(input) !== b )
    console.log(c);

}

solution2(input2);


