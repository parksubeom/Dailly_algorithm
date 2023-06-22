function solution(s){
   let stack = []
   let arr = [...s]
    
   for(let el of arr){
       if(s[0] === ')'){
           return false
       }
       if(el === '('){
           stack.push(el)
       }
       if(el === ')'){
           stack.pop()
       }
   }
    if(stack.length === 0){
        return true
    }

    return false
}