const maxLength = String(Number.MAX_SAFE_INTEGER).length - 1;

// initially I thought I could reduce the complexity by using numbers as big as possible to add instead of adding each character
// however, the Number() funciton call is O(n), so the complexity remains the same as adding each character one by one
const extractNumbers = (s) => {
  const numbers = [];
  for (let i = s.length; i >= 0; i -= maxLength) {
    const start = i - maxLength > 0 ? i - maxLength : 0;
    numbers.push(Number(s.slice(start, i)));
  }
  return numbers;
};

function add(a, b) {
  const numbersA = extractNumbers(a);
  const numbersB = extractNumbers(b);
  const largestLength = Math.max(numbersA.length, numbersB.length);

  let sum = "";
  let carry = 0;
  for (let i = 0; i < largestLength; i++) {
    const a = numbersA[i] || 0;
    const b = numbersB[i] || 0;
    let nsum = String(a + b + carry);
    carry = 0;

    if (nsum.length > maxLength) {
      carry = Number(nsum[0]);
      nsum = nsum.slice(1, nsum.length);
    }
    sum = nsum + sum;
  }
  if (carry) sum = String(carry) + sum;

  return sum;
}

export default add;
