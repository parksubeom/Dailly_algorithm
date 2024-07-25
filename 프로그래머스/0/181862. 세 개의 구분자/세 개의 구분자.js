function solution(myStr) {
    var answer = [];
    return myStr.split(/a|b|c/).filter((el)=> el!=="").length === 0 ? ["EMPTY"] : myStr.split(/a|b|c/).filter((el)=> el!=="");
}