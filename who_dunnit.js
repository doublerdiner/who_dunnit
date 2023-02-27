
// EPISODE 1
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);
//  "The murderer is Miss Scarlet."
//  CORRECT 
// Comment - There is only one variable set for murderer. 

// EPISODE 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// "The murderer is Professor Plum."
// WRONG
// TypeError: Assignment to constant variable
// Comment - I thought that the code would execute along with the error for the reassigned const variable.


// EPISODE 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// "First Verdict: The murderer is Mrs. Peacock."
// "Second Verdict: The murderer is Professor Plum."
// CORRECT
// Comment - The let variable inside the function is prioritised over the let variables outside of the function when the function is called.
// The let variable inside the function cannot be accessed by the secondVerdict variable.  


// EPISODE 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);
// "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard."
// "Suspect three is Mrs. Peacock."
// CORRECT
// Comment - The same logic applies as in Episode 3. 


// EPISODE 5
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);
// "The weapon is the Revolver."
// Comment - The values within the object can be modified even though the scenario has been set as a constant variable. 
// CORRECT



