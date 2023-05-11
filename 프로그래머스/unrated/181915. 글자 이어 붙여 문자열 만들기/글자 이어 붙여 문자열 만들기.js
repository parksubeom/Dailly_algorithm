function solution(my_string, index_list) {
    let result = []
    for(let el of index_list){
        result.push(my_string[el])
    }
    return result.join('')
}