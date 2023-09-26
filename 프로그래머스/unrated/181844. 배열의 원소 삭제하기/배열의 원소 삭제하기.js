function solution(arr, delete_list) {
   
    return arr.map((x,idx) => {
        let status = true
        for(let el of delete_list){
            if(el === x) {
                status = false
            }
        }
        if(status){
            return x
        }else{
            return "string"
        }
    }).filter((el) => el !== "string")
}