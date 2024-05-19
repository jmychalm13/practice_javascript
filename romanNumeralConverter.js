/* 
Roman Numeral Key:
  I             1
  V             5
  X             10
  L             50
  C             100
  D             500
  M             1000
Sometimes subtraction is used:
  I can be placed before V (5) and X (10) to make 4 and 9. 
  X can be placed before L (50) and C (100) to make 40 and 90. 
  C can be placed before D (500) and M (1000) to make 400 and 900.
Constraints:
  1 <= s.length <= 15
  s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
  It is guaranteed that s is a valid roman numeral in the range [1, 3999]

Input = string
Output = number
*/
function romanToInt(s) {
  var number = 0;
  var letters = s.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "I") {
      if (letters[i + 1] === "V") {
        number += 4;
        delete letters[i];
        delete letters[i + 1];
      } else if (letters[i + 1] === "X") {
        number += 9;
        delete letters[i];
        delete letters[i + 1];
      } else {
        number += 1;
        delete letters[i];
      }
    } else if (letters[i] === "X") {
      if (letters[i + 1] === "L") {
        number += 40;
        delete letters[i];
        delete letters[i + 1];
      } else if (letters[i + 1] === "C") {
        number += 90;
        delete letters[i];
        delete letters[i + 1];
      } else {
        number += 10;
        delete letters[i];
      }
    } else if (letters[i] === "C") {
      if (letters[i + 1] === "D") {
        number += 400;
        delete letters[i];
        delete letters[i + 1];
      } else if (letters[i + 1] === "M") {
        number += 900;
        delete letters[i];
        delete letters[i + 1];
      } else {
        number += 100;
        delete letters[i];
      }
    } else if (letters[i] === "V") {
      number += 5;
      delete letters[i];
    } else if (letters[i] === "L") {
      number += 50;
      delete letters[i];
    } else if (letters[i] === "D") {
      number += 500;
      delete letters[i];
    } else if (letters[i] === "M") {
      number += 1000;
      delete letters[i];
    }
  }
  return number;
}
var s = "XVI";
console.log(romanToInt(s));
