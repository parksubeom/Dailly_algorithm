function solution(strArr) {
    let result = ''
    let answer = []
   strArr.forEach((el) => {
       if(!el.includes("ad")){
           answer.push(el)
           }
   })
    return answer
}