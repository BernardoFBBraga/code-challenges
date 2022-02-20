"use strict";

const lll = this.readline().split(" ").map(Number);
const n = lll[0];
const k = lll[1];

const scores = this.readline().split(" ").map(Number);

let sol = k;
let bar = scores[sol - 1];

if (bar <= 0) {
  for (; sol > 0; sol--) {
    if (scores[sol - 1] > 0) break;
  }
}

if (sol == 0) {
  this.print(0);
} else {
  bar = scores[sol - 1];

  for (let index = sol; index < scores.length; index++) {
    const score = scores[index];
    if (score < bar) break;
    sol++;
  }
  this.print(sol);
}
