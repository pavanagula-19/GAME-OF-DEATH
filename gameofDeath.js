let fs = require("fs");
let data = fs.readFileSync('gameofDeath.txt', 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function gameofDeath(n, k){
    if(n==1){
        return 1;
    }
    else{
        return(gameofDeath(n-1, k) + k-1)%n+1;
    }
}

let test_cases = parseInt(readLine());
for(let i=0; i<test_cases; i++){
    let arr = readLine().split(" ")
    let n = parseInt(arr[0])
    let k = parseInt(arr[1])
    console.log(gameofDeath(n, k))
}