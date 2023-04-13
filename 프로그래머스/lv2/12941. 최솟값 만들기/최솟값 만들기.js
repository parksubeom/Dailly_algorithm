function solution(A,B){
    let a = A.sort((a,b) => a-b)
    let b = B.sort((a,b) => b-a)
    return a.map((el,idx) => el*b[idx]).reduce((acc,cur) => acc+cur,0)
}