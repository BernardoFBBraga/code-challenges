'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */


function myPalindromeIndex(s) {
  const stack = []
  console.log(s)
    let j=s.length-1
    for(let i=0; i<s.length/2; i++){
        if(s[i]===s[j]){
            j--
            continue
        }
        if(s[i+1]===s[j] && s[i]===s[j-1])
        {
            const a = myPalindromeIndex(s.slice(i+1,j+1))
            if(a===true) return i
            const b = myPalindromeIndex(s.slice(i,j))
            if(b===true) return j
            return false
        }
        
        if(s[i+1]===s[j]){
            stack.push(i)
            continue
        } 
        if(s[i]===s[j-1]){
            stack.push(j)
            j--
            i--
            continue
        }
        return false
    }

    if(stack.length === 0) return true
    if(stack.length > 1) return false
    return stack.pop()
}

function palindromeIndex(s){
    const i = myPalindromeIndex(s)
    console.log(i)
    return i === true || i === false? -1 : i
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = palindromeIndex(s);

        ws.write(result + '\n');
    }

    ws.end();
}