let input = Number(require('fs').readFileSync('../input.txt').toString().trim());
function make_remainders(num) {
    let target = num;
    let remainder;
    let remainders = [];
    while (target > 0) {
        remainder = target % 10;
        remainders.unshift(remainder);
        target = parseInt(target / 10);
    }
    return remainders
}

function solution(input) {
    input = parseInt(input);

    if (input < 100)
        console.log(input);
    else {
        let count = 99;

        for (let j = 100; j <= input; j++) {
            let bool = true;
            const remainders = make_remainders(j);
            let difference = remainders[0] - remainders[1];
            
            for (let i = 0; i < remainders.length - 1; i++) {
                if (difference !== remainders[i] - remainders[i + 1])
                    bool = false;
            }

            if (bool)
                count++;
        }
        console.log(count);
    }
}

solution(input);
