let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let result = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97));
let answer = new Array(26).fill(0);

function solution (input) {
    for (let el of input) {
        answer[result.indexOf(el)] = answer[result.indexOf(el)] + 1;
      }
      return answer.join(" ")
}
console.log(solution(input))
