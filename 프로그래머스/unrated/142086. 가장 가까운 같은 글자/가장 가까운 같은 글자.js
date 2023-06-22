function solution(s) {
   let arr = [...s]
   let result = []
   let answer = []
   for(let i = 0; i < arr.length; i++){
       if(result.indexOf(arr[i]) === -1){
           answer.push(result.indexOf(arr[i]))
           result.push(arr[i])
       }else if(result.indexOf(arr[i]) !== -1){
           answer.push(i - result.lastIndexOf(arr[i]))
           result.push(arr[i])
       }
   }
    return answer
}