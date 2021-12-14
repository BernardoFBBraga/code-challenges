"use strict";

const nQueues = this.readline().split(" ");

for (let i = 0; i < nQueues; i++) {
  const s = this.readline().split(" ");
  s.sort((a, b) => a - b);
  const todos = s[s.length - 1];
  const a = s[0];
  const b = s[1];
  const c = todos - a - b;
  this.print([a, b, c].join(" "));
}
