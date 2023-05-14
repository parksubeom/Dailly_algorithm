function solution(my_string, is_prefix) {
    let result = []
     let str = ''
    for(let el of my_string){   
        str += el
        result.push(str)
    }
    return result.filter((el) => el === is_prefix).length > 0 ? 1 : 0
}