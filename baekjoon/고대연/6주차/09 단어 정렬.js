let [num, ...input] = require('fs').readFileSync('dev/stdin').toString().trim().split("\n");
const set = new Set(input);
const newArr = [...set];

let sorted = newArr.sort((a, b) => {
    if (a.length < b.length)
        return -1;
    else if (a.length === b.length) {
        if (diff(a, b))
            return -1;
        else return 1;
    }
    else return 1;
    /*
  if (a.length > b.length) return 1;
  if (a.length < b.length) return -1;
  if (a > b) return 1;
  if (a < b) return -1;
    */
})

function diff(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return a[i].charCodeAt() < b[i].charCodeAt()
        }
    }
}

console.log(sorted.join("\n"));