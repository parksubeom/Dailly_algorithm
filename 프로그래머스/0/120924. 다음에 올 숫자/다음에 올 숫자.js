// i-1과의 차이와 i+1와의 차이가 같다면 등차수열
// i-1과의 차이와 i+1와의 차이가 다르다면 등차수열
function solution(common) {
    for(let i =1; i < common.length-1; i++){
        if(common[i] - common[i-1] === common[i+1] - common[i]){
            return common[common.length-1] + common[i] - common[i-1]
        }else{
            return common[common.length-1] * common[1] / common[0]
        }
    }
}