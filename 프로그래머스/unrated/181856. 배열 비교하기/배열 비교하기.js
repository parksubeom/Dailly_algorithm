function solution(arr1, arr2) {
   if(arr1.length !== arr2.length){
       return arr1.length > arr2.length ? 1 : -1
   }else if(arr1.reduce((acc,cur) => acc + cur ) === arr2.reduce((acc,cur) => acc + cur )){
       return 0
   }
    return arr1.reduce((acc,cur) => acc + cur ) > arr2.reduce((acc,cur) => acc + cur ) ? 1 : -1
}