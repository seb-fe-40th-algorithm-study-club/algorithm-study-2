let [num,...input] = require('fs').readFileSync('../input.txt').toString().split('\n').map(el=>+el);

function solution2(input){
    let sorted =input.sort((a,b) => a-b);
    sorted.forEach(element => { console.log(element);});

}

function solution(input){
    let min;
    let bool;

    for(let i = 0; i < input.length ; i++){
        min = input[i];
        bool = false;
        for(let j = i; j < input.length;j++){
            if(min > input[j]){
                let temp = min;
                min = input[j];
                input[j] = temp;
                bool = true;
            }
        }

        if(bool){
            input[i] = min;
        }
        else
            break;
    }    
    input.forEach(element => { console.log(element);});
}
solution(input);
