/*
1.입력값을 받는다.
2.정수모음을 스프레드를 통해 풀어서 배열에 넣어 필터를 돌린다.
3.찾아야 할 정수와 같은 정수만을 필터링 해서 담은 배열의 길이를 리턴한다.
*/

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, S, V] = input //N은 정수의 갯수 / S는 정수 모음 / V는 찾아야 할 정수
const cnt = S.split(" ").filter((el) => el === V).length;
console.log(cnt)