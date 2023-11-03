function solution(arr, queries) {
    let copy = [...arr]
    for(let el of queries){
        let [i,j] = el
        arr[i] = copy[j]
        arr[j] = copy[i]
        copy = [...arr]
    }
    return arr;
}