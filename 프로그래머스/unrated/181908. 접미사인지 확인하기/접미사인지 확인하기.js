function solution(my_string, is_suffix) {
    let suffix = []
    for(let i = 0; i < my_string.length; i++){
        suffix.push(my_string.slice(i))
    }
    return suffix.indexOf(is_suffix) === -1 ? 0 : 1
}