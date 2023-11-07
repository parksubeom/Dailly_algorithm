function solution(arr) {
    let stk = [];
    let i = 0;

    while (i< arr.length) {
        if(!stk.length){ // stk가 빈배열이라면
        stk.push(arr[i])
            i++
    }else if(stk.length){ // stk에 원소가 있고,
        if(stk[stk.length-1] < arr[i]){  // stk의 마지막 원소가 arr[i] 보다 작으면
            stk.push(arr[i]) // arr[i]를 stk의 뒤에 추가하고,
            i++ // i에 1을 더한다
        }else if(stk[stk.length-1] >= arr[i]){ //stk의 마지막 원소가 arr[i] 크거나 같으면
            stk.pop() // stk의 마지막 원소를 stk에서 재거한다.
        }
    }
    }
    
    return stk;
}