const convertToCelsius = function(temp) {
  temp = parseFloat((temp - 32) * 5/9);
  let tempRounded = Math.round(temp * 10) / 10;
  return tempRounded;
};

const convertToFahrenheit = function(temp) {
  temp = parseFloat((temp * 9/5 + 32));
  let tempRounded = Math.round(temp * 10) / 10;
  return tempRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
