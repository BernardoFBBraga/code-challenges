"use strict";
const myArgs = process.argv.slice(2);
const problemName = myArgs[0];
const testCase = myArgs[1];

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

async function ls(path) {
  const dir = await fs.promises.opendir(path);
  for await (const dirent of dir) {
    if (!testCase || dirent.name.includes(testCase)) {
      console.log(dirent.name);
      const inputString = fs.readFileSync(`./${problemName}/inputs/${dirent.name}`).toString().split("\n");
      let currentLine = 0;
      function readLine() {
        return inputString[currentLine++];
      }

      let printString = "";
      function print(s) {
        printString += s;
        printString += "\n";
      }

      function main() {
        const code = fs.readFileSync(`./${problemName}/main.js`).toString();
        eval(code);
      }

      main.call({ readline: readLine, print: print });

      const expectedOutput = fs.readFileSync(`./${problemName}/outputs/${dirent.name}`).toString();

      if (printString === expectedOutput) console.log("\x1b[42m\x1b[30mPassed\x1b[0m");
      else {
        console.log("\x1b[41m\x1b[30mFailed\x1b[0m");
        console.log("Printed:");
        console.log(printString);
        console.log("Expected:");
        console.log(expectedOutput);
      }
    }
  }
  process.exit();
}

if (problemName) {
  ls(`./${problemName}/inputs`).catch(console.error);
} else {
  console.log('Usage: node codeforces folderName [partialTestCaseName]')
  process.exit()
}
