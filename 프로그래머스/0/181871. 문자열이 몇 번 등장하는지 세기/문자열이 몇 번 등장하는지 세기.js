function solution(myString, pat) {
    myString = [...myString]
    let answer = 0
    let arr = []
    myString.forEach((el) => {
         if(arr.length >= pat.length){
            arr.shift()
        }
        arr.push(el)
        if(arr.join("") === pat){
            answer++
        }
    })
    return answer;
}