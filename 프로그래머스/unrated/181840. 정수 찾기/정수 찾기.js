function solution(num_list, n) {
    
    return num_list.filter((el) => el === n).length > 0 ? 1 : 0
}