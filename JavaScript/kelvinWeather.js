// a constant for todays temperature forecast
let kelvin = prompt('What is the Kelvin temperature today?');

// convert to celsius. this is 273 less than kelvin
let celsius = kelvin - 273;

// convert to fahrenheit and then round
let fahrenheit = Math.floor(celsius * (9/5) + 32);

// log the temp, interpolated into a sentence
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
