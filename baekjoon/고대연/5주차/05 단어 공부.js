
// const fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();
// let map = new Map;
// let answer=""
// for(let i=0; i<input.length; i++){
//     map.set(input[i],(map.get(input[i])||0)+1);
// }
// let max=Math.max(...map.values());
// for(let [k,v] of map){
//     if(v===max) answer+=k
// }
// if(answer.length>1) console.log("?")
// else console.log(answer)

let input = require('fs').readFileSync('../input.txt').toString().trim().toUpperCase();
function solution(input) {
    obj = {}
    for (let i = 0; i < input.length; i++) {
        if (obj[input[i]] !== undefined) {
            obj[input[i]]++;
        }
        else
            obj[input[i]] = 1;
    }

    let keys = Object.keys(obj);
    let values = Object.values(obj);

    let maxobj = {
        value: values[0],
        index: 0,
    }

    if (values.length === 1)
        console.log(keys[maxobj.index]);

    else {
        for (let i = 1; i < values.length; i++) {
            if (maxobj.value < values[i]) {
                maxobj.value = values[i]
                maxobj.index = i
            }
        }

        if (values.indexOf(maxobj.value, maxobj.index + 1) === -1) {
            console.log(keys[maxobj.index]);
        }
        else
            console.log("?")
    }
}

solution(input);


// const fs = require("fs");
// let input = fs.readFileSync('/dev/stdin').toString().trim().toUpperCase();
// let map = new Map;
// let answer=""
// for(let i=0; i<input.length; i++){
//     map.set(input[i],(map.get(input[i])||0)+1);
// }
// let max=Math.max(...map.values());
// for(let [k,v] of map){
//     if(v===max) answer+=k
// }
// if(answer.length>1) console.log("?")
// else console.log(answer)