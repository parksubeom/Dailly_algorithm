function solution(d, budget) {
    //d : 부서별 신청 예산
    //budget : 총 예산
    let result = 0
    d.sort((a,b) => a-b)
   if(d.reduce((acc,cur) => acc + cur,0) <= budget){
       return d.length
   }
    for(let i = 0; i < d.length; i++){
        result += d[i]
        if (result > budget){
            return i
        }
    }
}