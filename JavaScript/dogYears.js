// This is my age 
const myAge = 31;

// The first two human years of a dog's life count as 10.5 dog years each.
let earlyYears = 2;
earlyYears *= 10.5;

// we already accounted for the first two years
let laterYears = myAge - 2;

// Each human year following counts as 4 dog years. 
laterYears *= 4;

// find the total
let myAgeInDogYears = earlyYears + laterYears;

// this is my name
let myName = "Pete";

// this is my name in lower case
myName.toLowerCase();

// log it
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
