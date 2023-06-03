function solution(n) {
    // n에서 1씩더하면서, 2진수로 바꾼다.
    // 2진수로 바꾼 값의 1의 갯수가 같다면, 해당수를 다시 10진수로 바꾼다
    // 와일문 채용 가능할듯
    let binary =  n.toString(2)
    let a = n
   for(let i = n; i <= 1000000; i++){
       a++

       if([...a.toString(2)].filter(el => el === "1").length === [...binary].filter(el => el === "1").length){
           return a
       }
   }
}