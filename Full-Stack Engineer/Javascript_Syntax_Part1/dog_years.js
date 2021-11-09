// variables
const myAge = 30;
let earlyYears = 2;

// earlyYears calculatoion
earlyYears *= 10.5;

// laterYears calculation
let laterYears = myAge - 2;

// calulate dog years accounted for by later years
laterYears *= 4;

// print earlyYears and laterYears
console.log(`${earlyYears} and ${laterYears}`);

// calculate myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;

// create variable for my name and set to lowercase
const myName = 'NetDevMike'.toLowerCase();

// print myName
console.log(`${myName}`);

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);