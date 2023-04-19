function solution(sides) {
   
    let result = []
    // 나머지 한변이 가장 긴 변이 되는 경우
    let acase =  (Math.max(...sides) + Math.min(...sides)-1)-Math.max(...sides)
    // side 중 가장 큰 수가 긴변이 되는 경우
  for(let i = (Math.max(...sides) -  Math.min(...sides)+1); i <= Math.max(...sides); i++){
        result.push(i)
    } 
   for(let i =Math.max(...sides)+1; i <= (Math.max(...sides) +  Math.min(...sides)-1); i++){
        result.push(i)
    } 
    return result.length
}