const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(array) {
  initialValue = 0;
    return array.reduce(
      (accumulator, currentValue) => accumulator + currentValue, initialValue);
};

const multiply = function(array) {
    return array.reduce((accumulator, currentValue) => accumulator * currentValue, );
};

const power = function(x, y) {
	  return Math.pow(x, y);
};

const factorial = function(n) {

  let fact;
  if (n === 0) {
    fact = 1;
  } else {
    fact = n;
      for (let i = n - 1; i > 0; i--) {
        fact = fact * [i];
      }
  }
    return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
