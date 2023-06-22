function solution(s, n) {
    let smallstr = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97))
    let bigstr = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97).toUpperCase())
    let newarr = [...smallstr,...bigstr]
    let result =[]
    let answer = ''
    for(let el of [...s]){
        result.push(newarr.indexOf(el))
    }
    for(let i =0; i<result.length; i++){
        if(result[i] === -1){
            answer += " "
        }
        if(result[i] < 26){ //소문자인경우
            if(result[i]+n > 25 ){
                 answer += newarr[(result[i]+n)-26]
            }else if(result[i]+n <= 25 && result[i] !== -1){
                 answer += newarr[(result[i]+n)]
            }   
        }
        if (result[i] >= 26){ //대문자인경우
            if(result[i]+n > 51 ){
                answer += newarr[(result[i]+n) - 26]
            }else if(result[i]+n <= 51 && result[i] !== -1){
                 answer += newarr[(result[i]+n)]
            }
        }
    }
    
    return answer
}