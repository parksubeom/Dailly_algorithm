const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

/*
그룹단어체커
주어진 문자열이 그룹단어인지 판별해야한다.
한번 나온 알파벳은 또 등장하면 안된다.
ex => abcdef = 0  ababab = x  abccca = x aabcccd = 0
str을 순회하면서 알파벳.indexOf(str[el]) 값을 배열에 넣어준다.

키포인트
그룹이 지어진 단어가 있으면, 그 그룹외에는 단어가 존재하면 그룹단어가 아니게된다.
단어를 순회하며, 낱말단어가 바뀌는 순간 단어를 save배열에 저장해준다.
save배열의 역할은 낱말단어가 바뀌면서 새로오는 낱말단어가 이전에 존재했었는지 판별하게 해주기 위한 배열이다.
save에 존재한다 === 다른 낱말단어가 나온 뒤 다시 나온 낱말단어
save.indexOf()에서 -1이 나오지 않는다면 save에 존재한다는것이므로 N-1을 해준다.
이때 내부 반복문에서 -1을 해주면 의도와는 다른값이 나오므로 내부 반복문에서 flag를 통해 그룹단어인지 체킹을 한 후 외부반복문에서 빼줘야한다.
 */
let str = input.slice(1);
let cnt = Number(input[0]);

for (let el of str) {
  let save = [];
  let flag = false;
  for (let i = 0; i < el.length; i++) {
    if (save.indexOf(el[i]) !== -1) {
      // 중복된단어가 save에 들어가있다면 단어변경이 이루어진 후 다시 또 나온 케이스기때문에 그룹이아니다.
      save = []; // save 비워주고
      flag = true;
      continue; // 그룹단어가 아님을 판별했기때문에 이번순회는 끝내준다.
    }
    if (el[i] !== el[i + 1]) {
      // 단어가 바뀐다면 ?
      save.push(el[i]); // 단어가 바뀌는 시점의 이전단어를 저장한다.
    }
  }
  if (flag) {
    cnt--;
  }
}

console.log(cnt);
