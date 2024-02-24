function solution(arr, intervals) {
    let answer = []
    intervals.forEach((el) => {
        answer.push(arr.slice(el[0],el[1]+1)) 
    })
    return [...answer].flat();
}3