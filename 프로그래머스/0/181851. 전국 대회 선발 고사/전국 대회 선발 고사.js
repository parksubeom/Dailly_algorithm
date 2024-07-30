function solution(rank, attendance) {
    let num = []
    let newrank = rank.map((el,i) => attendance[i] ? el :1000000)
    for(let i =0; i < 3; i++){
        num.push(newrank.indexOf(Math.min(...newrank)))   
        newrank = newrank.map((el) => el === Math.min(...newrank) ? 1000000 : el)
        
    }
    let [a,b,c] = num 
    return 10000*a+100*b+c
}