function solution(s, skip, index) {
    let skiplist = new RegExp(`[^${skip}]`, 'g');
    let alphabet = new Array(26).fill().map((_, i)=> String.fromCharCode(i + 97)).join('').match(skiplist)
    let idx = []
    let arr = []
    
    for(let i =0; i < s.length;i++){
        idx.push(alphabet.indexOf(s[i]))
        arr.push(alphabet[(idx[i]+index)% alphabet.length])     
    }

    return  arr.join('')
}