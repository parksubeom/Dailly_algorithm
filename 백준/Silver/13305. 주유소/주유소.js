const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "));
/* 
1.1키로에 1리터의 기름을 사용한다.
2.도시마다 리터당 기름가격이 다르다
3. 키포인트는 싼곳에서 최대한 많이 넣어야한다

두개의 선택지가 있다.
1.다음도시의 기름값이 현재도시의 기름값보다 싸다면 다음도시와의 거리만큼만 주유
2.다음도시의 기름값이 현재도시의 기름값보다 비싸다면, 앞으로의 도시들 중 현재도시보다 싼 기름값을 가진 도시까지의 거리를 계산 후 
해당 거리만큼 주유해서간다.
*/
let total = input[1]
  .map((el) => BigInt(el))
  .reduce((x, y) => BigInt(x) + BigInt(y), 0);
let km = input[1].map((el) => BigInt(el));
let city = input[2].map((el) => BigInt(el));
let oil = 0n;
let minprice = BigInt(city[0]);
let i = 0;
//키
//
while (total !== 0n) {
  if (minprice <= city[i + 1]) {
    // 최저가가 다음 도시보다 싸다면 계속 최저가로 주유한다.
    oil += minprice * km[i];
    total -= km[i];
  } else if (minprice >= city[i + 1]) {
    //최저가가 다음 도시보다 비싸다면 다음도시의 가격이 최저가가된다.
    oil += minprice * km[i];
    minprice = city[i + 1];
    total -= km[i];
  }
  i++;
}
console.log(oil.toString());
