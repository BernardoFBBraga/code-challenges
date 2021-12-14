"use strict";

function answer(s) {
  if (s.length > 10) return s[0] + (s.length - 2) + s[s.length - 1];
  return s;
}

const nQueues = this.readline().split(" ");

for (let i = 0; i < nQueues; i++) {
  const length = Number(this.readline());
  const bigrams = this.readline().split(' ');
  let word = ''
  let found = false
  for(let i= 0; i< bigrams.length-1; i++) {
    const a = bigrams[i]
    const b = bigrams[i+1]
    if(a[1] === b[0]){
      word+= a[0]
    } else {
      found = true
      word+= a
    }
  }
  word+= bigrams[bigrams.length-1]
  if(!found) word+='a'
  this.print(word)
}
