function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function increment(n) {
  return n + 1;
}

const result = increment(5);
console.log(result); // Output: 6

function decrement(n) {
  return n - 1;
}

const results = decrement(5);
console.log(results);

function makeInt(string) {
  // Parse the string as a base 10 integer and return it
  return parseInt(string, 10);
}

function preserveDecimal(string) {
  // Parse the string as a float and return it
  return parseFloat(string);
}
