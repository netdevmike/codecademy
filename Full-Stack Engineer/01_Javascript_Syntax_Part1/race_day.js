let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnerAge = 12;

// runnerAge >= 18 && registeredEarly === true ? racenumber += 1000 console.log(`They will race at 9:30am and their raceNumber is ${raceNumber}`);

if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
  console.log(`They will race at 9:30am and their raceNumber is ${raceNumber}`)
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`They will race at 11:00am and their raceNumber is ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`They will race at 12:30pm and their raceNumber is ${raceNumber}`)
} else {
  console.log('See the registration desk');
}
