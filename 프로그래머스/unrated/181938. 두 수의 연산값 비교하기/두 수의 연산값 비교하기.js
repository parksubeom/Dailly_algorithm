function solution(a, b) {
    let case1 = Number(String(a)+String(b))
    let case2 = 2 * a * b 
    if(case1 === case2){
       return a+b
    }
    return case1 > case2 ? case1 : case2
            
}