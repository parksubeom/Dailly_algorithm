const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

/*
옹알이랑 비슷한 문제
크로아티아 문자의 영어로 바꾼 리스트들을 배열에 담는다.
크로아니아 문자를 하나씩 순회하며, 영어배열.include로 확인해서 카운트한다
 */
let str = input.join("").split("");
let arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let result = str.length;
let x = "";

for (let i = 0; i < str.length; i++) {
  x += str[i];
  if (arr.includes(x + str[i + 1] + str[i + 2])) {
    result = result - 2;
    x = "";
    i = i + 2;
  }
  if (arr.includes(x + str[i + 1])) {
    result--;
    x = "";
    i++;
  } else {
    x = "";
  }
}
console.log(result);
