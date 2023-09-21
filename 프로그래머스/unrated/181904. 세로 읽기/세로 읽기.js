function solution(my_string, m, c) {
   let str = [...my_string]
   let result = []
   let arr = []
   for(let i = 0; i<=str.length; i++){
       if(arr.length === m){
           result.push(arr)
           arr = []
       }
       arr.push(str[i])
     
   }
    return result.map(el => el[c-1]).join('')
}