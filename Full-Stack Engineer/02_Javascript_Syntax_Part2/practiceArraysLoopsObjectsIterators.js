/*
Write a function factorial() that takes a number as an argument and returns the factorial of the number.
Example:
factorial(6); 
returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 
Assume only positive numbers will be given as an argument for the factorial() function.
*/
// Write function below
const factorial = (num) => {
    let result = 1
    if (num > 0) {
      for(let i =1; i <= num; i++) {
        result *= i;
      }
      return result;
    } else {
      return 'number must be positive';
    }
  }

  console.log(factorial(6)); 
  // returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 



/*
Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.
*/
// Write function below
const subLength = (str, char) => {
    let strChars = str.toLowerCase().split(""),
        found = [],
        length = 0;
    
    strChars.forEach((val, index) => {
        if (val === char) {
            found.push(index);
        }
    });

    if (found.length != 2) {
        return length;
    }

   return str.slice(found[0], found[1]).length + 1;
}

console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0



/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
*/
// Write function below
const groceries = list => {
    let listString = ''
  
    for (let i=0; i<list.length; i++) {
      listString += list[i].item;
      if (i < list.length - 2) {
        listString += ', ';
      } else if (i === list.length - 2){
        listString += ' and ';
      }
    }
    return listString;
  }
  
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
  // returns 'Carrots, Hummus, Pesto and Rigatoni'
  console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
  // returns 'Bread and Butter'
  console.log(groceries( [{item: 'Cheese Balls'}] ));
  // returns 'Cheese Balls'