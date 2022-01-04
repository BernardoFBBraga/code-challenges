function score(dice) {
  const counter = {};
  let sum = 0;
  dice.forEach((element) => {
    counter[element] = (counter[element] || 0) + 1;
  });
  Object.keys(counter).forEach((die) => {
    let count = counter[die];
    let points = Math.floor(count / 3) * die * 100;
    if (die == 1) {
      points = points * 10;
      points += (count % 3) * 100;
    }
    if (die == 5) {
      points += (count % 3) * 50;
    }
    sum += points;
  });

  return sum;
}

export default score;
