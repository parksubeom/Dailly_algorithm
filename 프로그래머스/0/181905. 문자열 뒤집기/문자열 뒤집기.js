function solution(my_string, s, e) {
    var answer = '';
    let last = e-s
    return my_string.replace([...my_string.slice(s,e+1)].join(""),[...my_string.slice(s,e+1)].reverse().join("")) 

}