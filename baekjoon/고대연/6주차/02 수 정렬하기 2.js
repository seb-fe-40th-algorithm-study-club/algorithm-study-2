let [num, ...arr] = require('fs').readFileSync('../input.txt').toString().trim().split('\n').map(el => +el);
let savearr = [];

function mergesort(start, end) {
    let mid = Math.floor((start + end) / 2);
    if (start < end) {
        mergesort(start, mid);
        mergesort(mid + 1, end);
        merge(start, mid, mid + 1, end);
    }
}

function merge(leftstart, leftend, rightstart, rightend) {
    let leftindex = leftstart;
    let rightindex = rightstart;
    let savearrindex = leftstart;

    while (leftindex <= leftend && rightindex <= rightend) {
        if (arr[leftindex] < arr[rightindex]) {
            savearr[savearrindex] = arr[leftindex];
            leftindex++;
        }
        else if (arr[leftindex] > arr[rightindex]) {
            savearr[savearrindex] = arr[rightindex];
            rightindex++;
        }
        savearrindex++;
    }


    if (rightindex > rightend) {
        for (let i = leftindex; i <= leftend; i++) {
            savearr[savearrindex++] = arr[i];

        }
    }

    if (leftindex > leftend) {
        for (let i = rightindex; i <= rightend; i++) {
            savearr[savearrindex++] = arr[i];
        }
    }

    for (let i = leftstart; i <= rightend; i++) {
        arr[i] = savearr[i];
    }

}

mergesort(0, arr.length - 1);
console.log(arr.join("\n"));