/*
Exercise: Spelling Wizard
First, let’s write a program to help us improve our spelling skills.
Given the spellingWord, use a for...of loop to log each letter using console.log().
*/
const spellingWord = 'hippopotamus';

for (letter of spellingWord) {
  console.log(letter);
}

/*
Exercise: Pokemon Catcher
Write a for...of loop that iterates through our pokemonList array.

Inside the block of the for...of loop, use console.log() and string interpolation as modeled above to log each element in the pokemon array within the string 'You caught a 'X'!' For example, the first iteration of the loop should print ‘You caught a Pikachu!’ to the console.

One of the elements, 'Yoshi', is not a Pokemon. If you encounter 'Yoshi', use continue to skip this element before it is logged to the console.
*/
const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];
for (pokemon of pokemonList) {
  if (pokemon === 'Yoshi') {
    continue;
  }
  console.log(`You caught a ${pokemon}!`);
}

/*
Review
Congratulations! You have now been introduced to for...of and have successfully used it. In this article, you have learned how to do the following:

Understand the benefits of for...of.
Create a for...of loop from scratch.
Use a for...of loop to iterate over characters in strings and elements in arrays.
Use break and continue to control looping in a for...of loop.

There are other for type loops in JavaScript that exist for different purposes, such as for...in. Be careful to choose the correct type of loop for your situation. The next time you need to iterate through an array, string, or array-like object and don’t need to access the index, consider trying out for...of to keep your code succinct and readable.
*/