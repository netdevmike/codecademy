let input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for(i = 0; i < input.length; i++){
  //console.log(input[i]);
  //console.log(i);
  for(j = 0; j < vowels.length; j++){
    //console.log(vowels[j]);
    //console.log(j);
    if(input[i] === vowels[j]){
      //console.log(vowels[j]);
      //console.log(input[i]);
      resultArray.push(vowels[j])
      if (vowels[j] === 'e' || 'u') {
        resultArray.push(vowels[j]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());