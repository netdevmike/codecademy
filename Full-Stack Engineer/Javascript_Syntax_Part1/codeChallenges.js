/*
1.
Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'.

Helpful Notes:

Your function can be a function expression or a function declaration.
Notice that the prompt requires your function to return the string—it will not pass the test if the string is printed to the console rather than returned.
Your code must return 'Hello, World!' exactly. The test will not pass with the following strings: 'hello, world!', 'Hello, world!', 'Hello World!', 'Hello World', 'Hello, World.', etc.
*/
const greetWorld = () => {
  return 'Hello, World!';
}

/*
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.
*/
const canIVote = (age) => age>=18 ? true : false;
console.log(canIVote(19)); // Should print true
console.log(canIVote(15)); // Should print false

/*
Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.
*/
const agreeOrDisagree = (string1, string2) => string1 === string2 ? 'You agree!' : 'You disagree!';
console.log(agreeOrDisagree("yep", "yep"))  // Should print 'You agree!'
console.log(agreeOrDisagree("yep", "no"))  // Should print 'You disagree!'

/*
Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.
Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
*/
const lifePhase = age => {
  if (age > 0 && age <= 3) {
    return 'baby';
  } else if (age > 3 && age <= 12) {
    return 'child';
  } else if (age > 12 && age <= 19) {
    return 'teen';
  } else if (age > 19 && age <= 64) {
    return 'adult';
  } else if (age > 64 && age <= 140) {
    return 'senior citizen';
  } else {
    return 'This is not a valid age';
  }
}
console.log(lifePhase(5)) //should print 'child'
console.log(lifePhase(22)) //should print 'adult'

/*
Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A'
*/
const finalGrade = (grade1, grade2, grade3) => {
  if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100))  {
  return 'You have entered an invalid grade.';
}

let grade = (grade1 + grade2 + grade3)/3;

if (grade >= 0 && grade <= 59) {
  return 'F';
} else if (grade >= 60 && grade <= 69) {
  return 'D';
} else if (grade >= 70 && grade <= 79) {
  return 'C';
} else if (grade >= 80 && grade <= 89) {
  return 'B'
} else if (grade >= 90 && grade <= 100) {
  return 'A'
} else {
  return 'You have entered an invalid grade.';
}
}
console.log(finalGrade(99, 92, 95)) // Should print 'A'

/*
Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’
*/
const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`;
}
console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'

/*
We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?
*/
const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
}
console.log(rollTheDice());

/*
Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
*/
const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
      case 'Mercury':
          return earthWeight * .378;
      case 'Venus':
          return earthWeight * .907;
      case 'Mars':
          return earthWeight * .377;
      case 'Jupiter':
          return earthWeight * 2.36;
      case 'Saturn':
          return earthWeight * .916;
      default:
          return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
}
console.log(calculateWeight(100, 'Jupiter'))

/*
It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.
*/
const truthyOrFalsy = value => {
  if (value) {
      return true
  }
  return false
}
console.log(truthyOrFalsy(0)) // Should print false

/*
A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.
Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.
Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it.
The JavaScript Math.ceil() function will come in handy. Check out the documentation here to figure out how it works.
*/
const numImaginaryFriends = (friends) => {
  friends /= 4;
  return Math.ceil(friends);
}
console.log(numImaginaryFriends(20)) // Should print 5
console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)

/*
Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function:
*/
const sillySentence = (string1, string2, string3) => {
  return `I am so ${string1} because I ${string2} coding! Time to write some more awesome ${string3}!`;
}
console.log(sillySentence('excited', 'love', 'functions')) 

/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:

'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:

'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the person was born, you should return a string in the following format:

'You were [calculated age] in the year [year passed in]'
*/
const howOld = (age, year) => {
  // The following two lines make it so that our function always knows the current year.
      let dateToday = new Date();
      let thisYear = dateToday.getFullYear();
  // It is totally ok if your function used the current year directly!
    
      const yearDifference = year - thisYear
      const newAge = age + yearDifference
      if (newAge > age) {
          return `You will be ${newAge} in the year ${year}`
      } else if (newAge < 0) {
          return `The year ${year} was ${-newAge} years before you were born`
      } else {
          return `You were ${newAge} in the year ${year}`
      }
  }
  console.log(howOld(20, 2030));

/*
Given the percentage of DNA shared between two people, you can calculate their likely familial relationship.

We wrote a function, whatRelation(), that has one number parameter, percentSharedDNA, and returns the likely relationship. We expect the number passed in to always be an integer from 0 to 100, but for some reason it’s not working!

Here’s how it’s supposed to calculate the relationship:

100 should return 'You are likely identical twins.'
35-99 should return 'You are likely parent and child or full siblings.'
14-34 should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
6-13 should return 'You are likely 1st cousins.'
3-5 should return 'You are likely 2nd cousins.'
1-2 should return 'You are likely 3rd cousins.'
0 should return 'You are likely not related.'
Unfortunately, it’s not working how we want!

whatRelation(34) 
// Should return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
// But instead it's returning 'You are likely 1st cousins.'
 
whatRelation(3)
// Should return 'You are likely 2nd cousins.'
// But instead it's returning 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
*/
const whatRelation = percentSharedDNA => {
  if (percentSharedDNA === 100) {
      return 'You are likely identical twins.'
  } else if (percentSharedDNA > 34) {
      return 'You are likely parent and child or full siblings.'
  } else if (percentSharedDNA > 13) {
      return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
  } else if (percentSharedDNA > 5) {
      return 'You are likely 1st cousins.'
  } else if (percentSharedDNA > 2) {
      return 'You are likely 2nd cousins.'
  } else if (percentSharedDNA > 0) {
      return 'You are likely 3rd cousins'
  } else {
    return 'You are likely not related.'
  }
}
console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'

/*
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20
*/
const tipCalculator = (quality, total) => {
  switch (quality) {
    case 'bad' :
      return total *= 0.05;
      break;
    case 'ok' :
      return total *=0.15;
      break;
    case 'good' :
      return total *=0.20;
      break;
    case 'excellent' :
      return total *=0.30;
      break;
    default:
      return total *=0.18;
      break;
  }
}
console.log(tipCalculator('good', 100)) //should return 20

/*
Write a function, toEmoticon(), that takes in a string and returns the corresponding emoticon as a string. Use a switch/case, and cover these cases:

'shrug' should return '|_{"}_|'
'smiley face' should return ':)'
'frowny face' should return':('
'winky face' should return ';)'
'heart' should return '<3'
any other input should return '|_(* ~ *)_|'
*/
const toEmoticon = (emote) => {
  switch(emote) {
    case 'shrug' :
      return '|_{"}_|';
      break;
    case 'smiley face' :
      return ':)';
      break;
    case 'frowny face' :
      return ':(';
      break;
    case 'winky face' :
      return ';)';
      break;
    case 'heart' :
      return '<3';
      break;
    default:
      return '|_(* ~ *)_|';
      break;
  }
}
console.log(toEmoticon("whatever"))  // Should print  '|_(* ~ *)_|'


