"use strict";

const nQueues = this.readline().split(" ");

let sum = 0;
for (let i = 0; i < nQueues; i++) {
  const lll = this.readline().split(" ");
  let sure = 0;
  lll.forEach((element) => {
    sure += Number(element);
  });
  if (sure >= 2) sum++;
}
this.print(sum);
