// const reverse = (string) => {
//   let output = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     output += string[i];
//   }
//   return output;
// };

// const showMeTheMoney = (string) => {
//   for (letter of string) {
//     if (letter === "$") {
//       return true;
//     }
//   }
//   return false;
// };

// const alternateCapitals = (string) => {
//   let newString = "";
//   for (let i = 0; i < string.length; i++) {
//     if (i % 2 === 0) {
//       newString += string[i].toLowerCase();
//     } else {
//       newString += string[i].toUpperCase();
//     }
//   }
//   return newString;
// };

// const dupLetter = (string) => {
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i + 1]) {
//       return string[i];
//     }
//   }
//   return "no dupe";
// };

// const palindrome = (string) => {
//   let reverse = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reverse += string[i];
//   }
//   if (reverse.toLowerCase() === string.toLowerCase()) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const hamming = (string1, string2) => {
//   let total = 0;
//   for (let i = 0; i < string1.length; i++) {
//     if (string1[i] !== string2[i]) {
//       total++;
//     }
//   }
//   return total;
// };

// const reverseWords = (string) => {
//   let reversed = [];
//   let words = string.split(" ");
//   for (let i = words.length - 1; i >= 0; i--) {
//     reversed.push(words[i]);
//   }
//   return reversed.join(" ");
// };
console.log(reverseWords("popcorn is so cool isn't it yeah i thought so"));
