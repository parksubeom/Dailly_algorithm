function solution(arr, n) {
    return arr.map((el,idx) => arr.length % 2 === 1 && idx% 2 === 0 ? el = el+n : arr.length%2 === 0 && idx%2 === 1 ? el = el+n : el )
}