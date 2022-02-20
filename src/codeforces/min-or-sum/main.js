"use strict";

const nQueues = Number(this.readline().split(" "));

for (let i = 0; i < nQueues; i++) {
  const size = Number(this.readline().split(" "));
  const numbers = this.readline()
    .split(" ")
    .map(Number)
    .map((n) => n.toString(2).split("").reverse().join(""));
  const pos = [];
  const z = [];

  numbers.forEach((n) => {
    for (let i = 0; i < n.length; i++) {
      const db = n[i];
      if (db == 0) z[i] = true;
      else pos[i] = true;
    }
  });

  const cap = pos.length > z.length ? pos.length - 1 : z.length - 1;
  const sol = [];
  for (let j = 0; j < numbers.length; j++) {
    let n = pos[cap - j] ? "1" : "0";
    for (let i = cap - j - 1; i >= 0; i--) {
      if (j < numbers.length - 1) {
        n += "0";
      } else {
        if (pos[i]) n += "1";
        else n += "0";
      }
    }
    sol.push(parseInt(n, 2));
  }
  this.print(sol.reduce((prev, curr) => prev + curr, 0));
}
