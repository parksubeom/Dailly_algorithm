function solution(arr, queries) {
    var answer = [];
    
    for(let el of  queries){
        const [s,e,k] = el
        for(let i =0; i< arr.length; i++){
            if(s <= i && e >= i){
                if(i%k === 0){
                    arr[i] = arr[i]+1
                }
            }
        }
    }
    return arr
}