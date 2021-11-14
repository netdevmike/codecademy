// const getSleepHours = day => {
//   switch (day) {
//     case 'monday':
//       return 6
//     case 'tuesday':
//       return 6;
//     case 'wednesday':
//       return 6;
//     case 'thursday':
//       return 6;
//     case 'friday':
//       return 6;
//     case 'saturday':
//       return 6;
//     case 'sunday':
//       return 5;
//   }
// }

// const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getActualSleepHours = () => 6 + 6 + 6 + 6 + 6 + 6 + 5;

// const getIdealSleepHours = () => {
//   const idealHours = 6;
//   return idealHours * 7;
// }

const getIdealSleepHours = idealHours => idealHours * 7;

console.log('you slept ' + getActualSleepHours() + ' hour(s) this week'); // should print the sum of all sleep hours in the week
 
console.log('You wanted to get ' + getIdealSleepHours(6) + ' hour(s) of sleep'); 

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(6);

    if (actualSleepHours === idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + 
      ' hour(s) more or less sleep than you needed this week. Right on the dot');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week. You are well rested.');
    } else {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
};


calculateSleepDebt();