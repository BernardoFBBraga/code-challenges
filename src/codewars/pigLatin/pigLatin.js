function pigIt(str) {
  let s = str.split("");
  let firstLetter;
  for (let i = 0; i < s.length; i++) {
    if (s[i].match("[a-zA-Z]")) {
      if (!firstLetter) {
        firstLetter = s[i];
        s = [...s.slice(0, i), ...s.slice(i + 1, s.length)];
        i--;
      }
    } else {
      if (firstLetter) {
        const char = s[i];
        s = [...s.slice(0, i), firstLetter, "a", "y", ...s.slice(i, s.length)];
        i = i + 2;
        firstLetter = undefined;
      }
    }
  }

  if (firstLetter) s = [...s, firstLetter, "a", "y"];

  return s.join("");
}

export default pigIt;
