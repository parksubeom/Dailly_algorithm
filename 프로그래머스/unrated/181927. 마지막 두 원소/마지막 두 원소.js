function solution(num_list) {
    let tail = num_list[num_list.length-1]
    let tail2 = num_list[num_list.length-2]
    let result = tail>tail2 ?num_list.push(tail-tail2) : num_list.push(tail*2)
    return num_list
}