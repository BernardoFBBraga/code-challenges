"use strict";

const nQueues = this.readline().split(" ");

for (let i = 0; i < nQueues; i++) {
  const n = Number(this.readline());
  const numbers = this.readline().split(" ");
  let lastColor;
  let j = 0;
  let chosen = numbers[0];
  let success = true;
  for (j = 0; j < n; j++) {
    chosen = numbers[j];
    lastColor = undefined;
    success = true;
    for (let k = 0; k < n; k++) {
      const rest = numbers[k] % chosen;
      const color = rest === 0;
      if (lastColor === undefined || color !== lastColor) {
        lastColor = color;
      } else {
        success = false;
        break;
      }
    }
    if (success) {
      this.print(chosen);
      break;
    }
  }
  if (!success) this.print(0);
}
