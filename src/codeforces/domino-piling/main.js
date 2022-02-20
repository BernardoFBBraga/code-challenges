"use strict";

const size = this.readline().split(" ").map(Number);
const w = size[0] > size[1] ? size[0] : size[1];
const h = size[0] > size[1] ? size[1] : size[0];

const lw = w % 2;

const sqw = w - lw;

let sum = (h * sqw) / 2;

if (lw) sum += Math.floor(h / 2);

this.print(sum);
