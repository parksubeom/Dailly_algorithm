function solution(numbers, n) {
    let result = 0
    for(let el of numbers){
        result += el
        if(result > n){
            return result
        }
    }
    return answer;
}