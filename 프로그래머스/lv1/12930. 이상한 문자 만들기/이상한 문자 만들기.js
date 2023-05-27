function solution(s) {
    let word = s.split(' ');
    let result = [];
    
    for(let i = 0; i < word.length; i++){
        let newWord = '';
        for(let j = 0 ; j < word[i].length; j++){
            if(j%2 === 0){
               newWord += word[i][j].toUpperCase()
            }else {
               newWord += word[i][j].toLowerCase()
            }
        }
        result.push(newWord);
    }
 return result.join(" ");
}