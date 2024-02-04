function solution(num_list) {
    let answer = 0;

for(let el of num_list){
    while(el !== 1){
        if (el % 2 === 1) {
            el -=1
            el /= 2
        }else{
            el /=2
        }
        answer++
    }
}

    return answer;
}
