function solution(num_list, n) {
   
    let result = num_list.splice(0,n)
    num_list.push(...result)
    return num_list
}