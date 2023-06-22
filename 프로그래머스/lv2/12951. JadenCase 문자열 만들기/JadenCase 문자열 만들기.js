function solution(s) {
    /*let result = s.split(" ")
    let arr = []
    for(let el of result){
      arr.push(el[0].toUpperCase() + el.slice(1).toLowerCase())
    }
    return arr.join(" ")*/
    
    return s.split(' ').map(el => el.charAt(0).toUpperCase() +el.substring(1).toLowerCase()).join(' ')
}