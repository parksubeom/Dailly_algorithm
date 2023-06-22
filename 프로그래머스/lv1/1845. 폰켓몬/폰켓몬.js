function solution(nums) {
    let target = nums.length / 2
    const set = new Set(nums)
    const setarr = [...set]
    if(target < setarr.length){
        return setarr.length-1
    }
    return setarr.length
}