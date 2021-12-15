"use strict";

const nQueues = this.readline().split(" ");

for (let i = 0; i < nQueues; i++) {
  const n = Number(this.readline());
  const minutes = this.readline()
    .split(" ")
    .map((e) => Number(e));
  const sum = minutes.reduce((prev, curr) => prev + curr, 0);
  const totalRep = (n * (n + 1)) / 2;

  if (sum % totalRep) {
    this.print("NO");
    continue;
  }

  const ans = new Array(n);

  let fail = false;
  for (let x = 0; x < n; x++) {
    ans[x] = (minutes[(n - 1 + x) % n] - minutes[x] + sum / totalRep) / n;

    if (ans[x] <= 0 || Math.abs(ans[x] - Math.round(ans[x])) > 0.0000001) {
      this.print("NO");
      fail = true;
      break;
    }
  }

  if (!fail) {
    this.print("YES");
    this.print(ans.join(" "));
  }
}
