function solution(list) {
  if (!list || !list.length) return "";
  let string = String(list[0]);

  let range = false;

  for (let i = 1; i < list.length; i++) {
    const element = list[i];

    if (!range) {
      if (i + 1 < list.length && element === list[i - 1] + 1 && element === list[i + 1] - 1) {
        range = true;
        string = string + "-";
      } else {
        string = string + "," + element;
      }
    } else {
      if (element !== list[i - 1] + 1) {
        string = string + list[i - 1] + "," + element;
        range = false;
      }
    }
  }
  if (range) {
    string = string + list[list.length - 1];
  }
  return string;
}

export default solution;
