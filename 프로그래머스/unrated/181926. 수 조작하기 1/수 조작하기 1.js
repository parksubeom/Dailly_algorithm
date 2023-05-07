function solution(n, control) {
   
   for(let el of control){
       if(el === 'w'){
          n += 1
       }
        if(el === 's'){
           n -= 1
       }
        if(el === 'd'){
          n += 10
       }
        if(el === 'a'){
           n -= 10
       }
   }
    return n
}