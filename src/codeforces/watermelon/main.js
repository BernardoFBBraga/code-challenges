"use strict";

function answer(s) {
  const n = Number(s);
  const a = (n - 2) % 2 === 0;
  const b = n > 2;
  return a && b ? "YES" : "NO";
}

const kilos = this.readline().split(" ");

this.print(answer(kilos));
