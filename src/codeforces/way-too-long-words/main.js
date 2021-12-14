"use strict";

function answer(s) {
  if (s.length > 10) return s[0] + (s.length - 2) + s[s.length - 1];
  return s;
}

const nQueues = this.readline().split(" ");

for (let i = 0; i < nQueues; i++) {
  const s = this.readline();
  this.print(answer(s))
}
