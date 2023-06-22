function solution(progresses, speeds) {
    let result = []
    let arr = progresses.map((el,idx) => el = Math.ceil((100-el)/speeds[idx]))
    let cnt = 0
    let head = arr[0]   
 
    for(let i = 0; i <= arr.length; i++){
         if(head >= arr[i]){     
             cnt++
         }
         if(head < arr[i]){
             result.push(cnt)
             head = arr[i]
             cnt = 1
         }
         if(i === arr.length-1){
            result.push(cnt)
         }
    }
     return result
}
//[[5],[10,1,1]]