const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");
/* 
a/b
*/
let [a, b] = input.map(Number);
console.log(a / b);
