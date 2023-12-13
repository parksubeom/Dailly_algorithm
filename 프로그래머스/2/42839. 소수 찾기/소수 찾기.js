function isPrime(num) {
  if (num === 1 || num === 0) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
    
    //넘버로 만들 수 있는 수의 경우의 수를 모두 배열에 담은다음, 배열을 순회하며 소수인지 판별하여 소수 라면 cnt ++ 해준다.
    let arr= [numbers,[...numbers].reverse().join("")]
    let result = []
    let cnt = 0
    function generateCombinations(str, current = '', index = 0) {
    if (index === str.length) {
       result.push(current);
        return;
    }

    // Include the current character
    generateCombinations(str, current + str[index], index + 1);

    // Exclude the current character
    generateCombinations(str, current, index + 1);
}
    arr.forEach((el) => {
        generateCombinations(el)
    })
let filterarr = [...new Set(result.filter((el) => el !== "").map(el => +el))]
filterarr.forEach((x) => {
    if(isPrime(Number(x))){
        cnt++
    }
})
return cnt
}

