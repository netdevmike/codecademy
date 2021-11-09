// Variables
const kelvin = 300;
let celsius;
let fahrenheit;

// celsisus calculation
celsius = kelvin - 273;

// fahrenheit calculation and round down
fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);


// Convert to Newton
let newton;
newton = Math.floor(celsius*(33/100));

console.log(`Celsius is ${newton} in the Newton Scale`);