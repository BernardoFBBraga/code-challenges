"use strict";

const nQueues = Number(this.readline().split(" "));

for (let i = 0; i < nQueues; i++) {
  const size = Number(this.readline().split(" "));
  const numbers = this.readline().split(" ").map(Number);
  const origArr = [...numbers];

  let lastChanged = -1;
  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i - 1] < numbers[i] && numbers[i] > numbers[i + 1]) {
      if (lastChanged == i-1) {
        numbers[i - 1] = numbers[i];
        lastChanged = i-1;
      } else {
        numbers[i + 1] = numbers[i];
        lastChanged = i+1;
      }
    }
  }

  let nops = 0;
  for (let i = 0; i < origArr.length; i++) {
    if (numbers[i] != origArr[i]) nops++;
  }

  this.print(nops);
  this.print(numbers.join(" "));
}
