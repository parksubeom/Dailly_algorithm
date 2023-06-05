function solution(t, p) {
    let result = []
    for(let i = 0;i<t.length;i++ ){
        if(i > t.length-p.length){
            return result.map((el) => parseInt(el,10)).filter(el => el <= p).length
        }
            result.push(t.slice(i,i+p.length))       
    }
    return result.map((el) => parseInt(el,10)).filter(el => el <= p).length
    
}