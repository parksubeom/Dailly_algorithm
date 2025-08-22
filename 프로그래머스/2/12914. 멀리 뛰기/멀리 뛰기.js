/*
*/

function solution(n) {
const MOD = 1234567

// n에 도달하는 방법의 수를 저장할 테이블(배열)
// 배열의 크기는 n+1
const ways = [0,1,2]
if(n === 1){
    return 1
}

 // i번째 칸의 방법 수는 (i-1)번째 칸과 (i-2)번째 칸의 방법 수를 더한 값
    for(let i = 3; i<=n; i++){
        ways[i] = (ways[i-1] + ways[i-2]) % MOD
    }
  return ways[n]
}

