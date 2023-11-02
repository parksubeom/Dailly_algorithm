function solution(myString) {
  let answer = 0
  let result = []
  for(let i = 0; i<myString.length; i++){
      if(myString[i] === 'x'){
          result.push(answer)
          answer = 0
      }else{
          answer++  
      }
      if(i === myString.length-1){
          
      }
  }
 result.push(answer);
    return result
}