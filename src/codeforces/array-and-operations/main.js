"use strict";

const nQueues = this.readline().split(" ");

for (let i = 0; i < nQueues; i++) {
  const lll = this.readline().split(" ");
  const n = lll[0]
  const k = lll[1]
  const numbers = this.readline().split(" ").map(function(e){return Number(e)});
  numbers.sort((a, b) => a - b);
  const ys = numbers.slice(n - k, n + 1);
  const xs = numbers.slice(n - k - k, n - k);
  const somar = numbers.slice(0, n - k - k);
  let score = 0;
  for (let j = 0; j < k; j++) {
    score += Math.floor(xs[j] / ys[j]);
  }
  for (let j = 0; j < somar.length; j++) {
    score += somar[j];
  }
  this.print(score);
}
