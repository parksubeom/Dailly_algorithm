const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [A, B] = fs.readFileSync(filePath).toString().trim().split("\n");
const strokes = {
    'A': 3,
    'B': 2,
    'C': 1,
    'D': 2,
    'E': 3,
    'F': 3,
    'G': 2,
    'H': 3,
    'I': 3,
    'J': 2,
    'K': 2,
    'L': 1,
    'M': 2,
    'N': 2,
    'O': 1,
    'P': 2,
    'Q': 2,
    'R': 2,
    'S': 1,
    'T': 2,
    'U': 1,
    'V': 1,
    'W': 1,
    'X': 2,
    'Y': 2,
    'Z': 1
}
let arr = [];

for (let i = 0; i < A.length; i++) {
    arr.push(strokes[A[i]])
    arr.push(strokes[B[i]])
}

while (true) {
    if (arr.length === 2) break;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[0] + arr[1];
        if (temp >= 10) {
            arr.push(temp % 10);
        } else {
            arr.push(temp);
        }
        arr.shift(); 
        count += 1;
        if(count === arr.length - 1) arr.shift();
    }
}

console.log(arr.join(''));