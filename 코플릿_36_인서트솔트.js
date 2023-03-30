const insertionSort = (arr) => {
  // TODO: 여기에 코드를 작성합니다.
  // arr[0]번째 인덱스 result에 넣는다.
  // arr shift한다
  // result[0]번째인덱스보다 arr[0]번째 인덱스가 크다면 푸쉬, 작다면 쉬프트로 넣어준다.
  let result = []
    if(arr.length === 0){
    return result
  }

const subfuntion = (arr,result) => {
   if(arr.length === 0){
    return result
  }
  if(arr[0] > result[0] ||  result.length < 1){
    result.push(arr.shift())
  }else if(arr[0] < result[0]) {
     result.unshift(arr.shift())
  }
  subfuntion(arr,result)
}
  subfuntion(arr,result)
  return result
   
};

  
  

  let arr = [5, 4, 3, 2, 1]