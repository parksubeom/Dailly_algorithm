const solution = () => {
  const fs = require("fs");
  const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
  const N = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number)[0];
  let count = 0;
  let answer = [];

  // func(n)이 func(n-1)로 점점 작아져  base case까지 도달해야함
  const hanoi = (n, first, second, third) => {
    if (!n) return; // n이 0이면 return

    // first -> third : n을 옮기기 위해선 n-1을 다른 곳으로 옮겨야하기 때문(더 큰 판이 아래로 가야함)
    hanoi(n - 1, first, third, second);
    answer.push([first, third]);
    count += 1; // 이동시 + 1

    // second -> third : n -1을 다시 second로 옮김
    hanoi(n - 1, second, first, third);
  };

  hanoi(N, 1, 2, 3);

  console.log(count);
  return answer.map((i) => i.join(" ")).join("\n");
};

// 옮긴 횟수
console.log(solution());
