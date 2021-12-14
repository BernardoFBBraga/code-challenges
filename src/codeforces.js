'use strict';
const myArgs = process.argv.slice(2);

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

const inputString = fs.readFileSync(`./${myArgs[0]}/input.txt`).toString().split('\n');
//let inputString = '';
let currentLine = 0;


function readLine() {
    return inputString[currentLine++];
}

function main() {
    const code = fs.readFileSync(`./${myArgs[0]}/main.js`).toString()
    eval(code);
}

main.call({readline:readLine, print:console.log});
process.exit();
