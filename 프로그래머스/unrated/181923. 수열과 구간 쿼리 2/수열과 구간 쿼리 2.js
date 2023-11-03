function solution(arr, queries) {
    //s와 e사이의 수를 arr에서 찾아내야한다.
    //찾아낸 수 중 k보다 큰수를 찾는다.
    // 그중에 가장 작은수를 리턴한다. 
    let result = []
    for(let i = 0; i < queries.length; i++){
        let [s,e,k] = queries[i]
        result.push(arr.slice(s,e+1).filter((x) => x > k).sort((a,b) => a-b)[0] )
    }
   return result.map((el) => el === undefined ? -1 : el)
}