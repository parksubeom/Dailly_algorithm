function solution() {
  /*

       */
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const input = fs.readFileSync(filePath).toString().trim().split("\n");
  let get = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let find = input[3].split(" ").map(Number);
  let set = new Set(get);
  let result = [];
  let size = get.length;
  for (let el of find) {
    set.add(el);
    if (set.size === size) {
      // 가지고있는 카드인경우
      result.push(1);
    } else if (set.size > size) {
      //가지고있지 않은 경우
      size++;
      result.push(0);
    }
  }
  console.log(...result);
}
solution();