function solution(a, d, included) {
    
    let result = []
    for(let el of included){
        if(el === true){
         result.push(a)    
        } 
        a= a+d
    }
    
    return result.reduce((acc,cur) => acc+cur,0)
}