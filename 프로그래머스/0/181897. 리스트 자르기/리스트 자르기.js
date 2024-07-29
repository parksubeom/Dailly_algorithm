function solution(n, slicer, num_list) {
    let [a,b,c] = slicer
    return n === 1 ? num_list.slice(0,b+1) : n === 2 ? num_list.slice(a) : n === 3 ? num_list.slice(a,b+1) : num_list.slice(a,b+1).map((el,i) =>i%c === 0 && el).filter((el) => el !== false)
}