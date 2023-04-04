/*
문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
 */
/*function solution(my_str, n) {
    let str = [...my_str];
    let result = []
    let aa = []
    while(true){
        result.push(str.splice(0,n))
        if(result.length >= str.length ){
            break
        }
    }
    for(let i =0; i<result.length; i++){
        aa.push(result[i].reduce((acc,cur) => acc + cur))
    }
    return aa
}*/

function solution(my_str, n) {
    let answer = [];
    let cnt = 0;

    for(let i=0; i<Math.ceil(my_str.length/n); i++){

        answer.push(my_str.substr(cnt,n));
        cnt = cnt + n;
    }

    return answer;
}