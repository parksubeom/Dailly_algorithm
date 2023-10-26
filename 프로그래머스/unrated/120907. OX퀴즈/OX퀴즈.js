function solution(quiz) {
    let answer = [];
    for(let i = 0; i < quiz.length; i++){
        let firstNum = Number(quiz[i].split(" ")[0])
        let secondNum = Number(quiz[i].split(" ")[2])
        let calc = Number(quiz[i].split(" ")[4])
        let sign = quiz[i].split(" ")[1]
    if(sign === "+"){
            if(firstNum + secondNum === calc){
                answer.push("O")
            }else{
            answer.push("X")
            }
        }else if(sign === "-"){
             if(firstNum - secondNum === calc){
                answer.push("O")
            }else{
            answer.push("X")
            }
        }
    } 
       
    return answer;
}

     
    