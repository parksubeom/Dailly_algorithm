function solution(arr) {
    let answer = 0
  for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length; j++){
          if(arr[i][j] === arr[j][i]){
              answer = 1
          }else if(arr[i][j] !== arr[j][i]){
              return answer = 0
          }
      }
  }
    return answer
}