let [num, ...input] = require('fs').readFileSync('../input.txt').toString().trim().split('\n');
function solution(input) {
    input = input.map(el => el.split(" "));
    console.log(input.sort((a,b) => a[0]-b[0]).map(el=>el.join(" ")).join("\n"))
}

function solution2(input) {
    input = input.map(el => {let temp = el.split(" "); return [+temp[0],temp[1]]});
    let sorted = [];

    function mergesort(start, end) {
        if (start < end) {
            let mid = Math.floor((start + end) / 2);
            mergesort(start, mid);
            mergesort(mid + 1, end);
            merge(start, mid, end);
        }
    }

    function merge(start, leftend, rightend) {
        let leftindex = start;
        let rightindex = leftend + 1;
        let sortedindex = start;

        while (leftindex <= leftend && rightindex <= rightend) {
            if (input[leftindex][0] < input[rightindex][0]) {
                sorted[sortedindex++] = input[leftindex++];
            }
            else if (input[leftindex][0] > input[rightindex][0]) {
                sorted[sortedindex++] = input[rightindex++];
            }
            else if (input[leftindex][0] === input[rightindex][0]) {
                    sorted[sortedindex++] = input[leftindex++];
            }
        }

        if (leftindex > leftend) {
            for (let i = rightindex; i <= rightend; i++) {
                sorted[sortedindex++] = input[i];
            }
        }

        if (rightindex > rightend) {
            for (let i = leftindex; i <= leftend; i++) {
                sorted[sortedindex++] = input[i];
            }
        }

        for (let i = start; i <= rightend; i++) {
            input[i] = sorted[i];
        }
    }

    mergesort(0, input.length - 1);
    console.log(input.map(e=>e.join(' ')).join('\n'));
}

solution2(input);