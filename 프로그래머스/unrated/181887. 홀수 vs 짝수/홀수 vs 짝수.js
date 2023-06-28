function solution(num_list) {
   
    return Math.max(...[num_list.filter((el,idx) => idx%2 === 1 && num_list[idx]).reduce((acc,cur) => acc + cur ,0),num_list.filter((el,idx) => idx%2 === 0 && num_list[idx]).reduce((acc,cur) => acc + cur ,0)])
}