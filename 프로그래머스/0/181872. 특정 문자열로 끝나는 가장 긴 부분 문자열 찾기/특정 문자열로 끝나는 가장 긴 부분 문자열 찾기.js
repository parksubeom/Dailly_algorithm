function solution(myString, pat) {
    var answer = '';
    let arr = []
    let mystring = [...myString]
    for(let i =0; i<mystring.length; i++){
        answer += mystring[i]
        if(answer.slice(answer.length-pat.length) === pat){
            arr.push(answer)
       
        }
    }
    return arr.sort((a,b) => b.length - a.length)[0]
}