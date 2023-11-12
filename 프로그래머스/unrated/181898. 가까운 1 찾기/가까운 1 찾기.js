function solution(arr, idx) {
   //arr[idx] 이후의 인덱스 중, 가장 가까운 1을 찾는 함수
    for(let i = idx; i<arr.length; i++){
        if(arr[i] === 1){
            return i
        }
    }
    return -1
}