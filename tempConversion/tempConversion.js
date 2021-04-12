const ftoc = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  let roundCelsius = Number(celsius.toFixed(1));
  return roundCelsius;
}

const ctof = function(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  let roundFahrenheit = Number(fahrenheit.toFixed(1));
  return roundFahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
