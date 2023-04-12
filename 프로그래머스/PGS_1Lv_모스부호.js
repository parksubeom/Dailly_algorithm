function solution(letter) {

   let lettersplit = letter.split(" ")
   let alphabet = new Array(26).fill().map((_, i) => String.fromCharCode(i + 97)).join("");
   let passward = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
   let result = []
   let answer=[]
   for(let i = 0; i < lettersplit.length; i++){
      result.push(passward.indexOf(lettersplit[i]))
      answer.push(alphabet[result[i]]) 
   }

    return answer.join('')
}