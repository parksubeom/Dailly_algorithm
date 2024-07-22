function solution(arr, flag) {
    var X = [];
    flag.forEach((el,i) => {
        if(flag[i]){
            for(let x =0; x < arr[i]*2; x++){
                X.push(arr[i])
            }
        }else{
           X.splice(-arr[i],arr[i])
            console.log(X)
        }
    })
    return X
}