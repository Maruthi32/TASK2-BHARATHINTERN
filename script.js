document.getElementById('convertBtn').addEventListener('click', function () {
  var inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
  var fromUnit = document.getElementById('fromUnit').value;
  var toUnit = document.getElementById('toUnit').value;

  var convertedTemperature;

  if (fromUnit === 'celsius') {
    if (toUnit === 'fahrenheit') {
      convertedTemperature = inputTemperature * 9 / 5 + 32;
    } else if (toUnit === 'kelvin') {
      convertedTemperature = inputTemperature + 273.15;
    } else {
      convertedTemperature = inputTemperature;
    }
  } else if (fromUnit === 'fahrenheit') {
    if (toUnit === 'celsius') {
      convertedTemperature = (inputTemperature - 32) * 5 / 9;
    } else if (toUnit === 'kelvin') {
      convertedTemperature = (inputTemperature - 32) * 5 / 9 + 273.15;
    } else {
      convertedTemperature = inputTemperature;
    }
  } else if (fromUnit === 'kelvin') {
    if (toUnit === 'celsius') {
      convertedTemperature = inputTemperature - 273.15;
    } else if (toUnit === 'fahrenheit') {
      convertedTemperature = (inputTemperature - 273.15) * 9 / 5 + 32;
    } else {
      convertedTemperature = inputTemperature;
    }
  } else {
    convertedTemperature = inputTemperature;
  }

  document.getElementById('outputTemperature').value = convertedTemperature.toFixed(2);
});
