function solution(nums) {
    let cnt = 0
    let arr = []
 function isPrime(num) {
    if (num < 2) return false; 
    if (num === 2) return true; // 2는 소수
    if (num % 2 === 0) return false; // 2를 제외한 짝수는 소수가 아님
    for (let i = 3; i <= Math.sqrt(num); i += 2) { // 홀수만 검사
        if (num % i === 0) return false;
    }
    return true;
}

    function getCombinations(arr) {
  const combinations = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        combinations.push([arr[i], arr[j], arr[k]]);
      }
    }
  }
  return combinations;
}
    let answer = getCombinations(nums).map((el) => el.reduce((acc,cur)=> acc+cur),0).map((el) => isPrime(el))
    return answer.filter((el) => el).length
}