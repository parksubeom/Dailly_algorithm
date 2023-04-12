function solution(k, score) {
    let result = []
    let result2 = []
    for(let el of score){
        result.push(el)
        result.sort((a,b) => b - a)
        if(result.length < k){    
            result2.push(result[result.length-1]) 
        }else if (result.length >= k){
            result2.push(result[k-1]) 
        }
           
      
        
    }
   return result2
}