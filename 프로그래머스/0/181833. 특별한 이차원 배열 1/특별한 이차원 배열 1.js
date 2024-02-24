function solution(n) {
    var answer = [];
      
    for(let i =0; i<n;i++){
     let arr = Array(n).fill(0).map((el,idx) => i === idx ? 1 : 0)
        answer.push(arr)
    }
    return answer
}