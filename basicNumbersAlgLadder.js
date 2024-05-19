// circle back to this
// const isPrime = (num) => {
//   if (num <= 1) return false;
//   if (num === 2) return true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// const fizzbuzz = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//       console.log("FIZZBUZZ");
//     } else if (i % 5 === 0) {
//       console.log("BUZZ");
//     } else if (i % 3 === 0) {
//       console.log("FIZZ");
//     } else {
//       console.log(i);
//     }
//   }
// };

// const fibonacci = (num) => {
//   const fib = [0, 1];
//   for (let i = 0; i < num - 2; i++) {
//     fib.push(fib[i] + fib[i + 1]);
//   }
//   return fib.slice(-1);
// };

// const isLeapYear = (year) => {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         return true;
//       }
//       return false;
//     }
//     return true;
//   } else {
//     return false;
//   }
// };

const multiplesOf3And5 = () => {
  // create counter to hold sum
  // create an array of all multiples of 3 and 5 below 1000
  // total this array and return total
  let sum = 0;
  let nums = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      nums.push(i);
    }
  }
  for (num of nums) {
    sum += num;
  }
  return sum;
};

// const collatzConjecture = (num) => {
//   if (num < 0) return false;
//   let steps = 0;
//   while (num !== 1) {
//     if (num % 2 === 0) {
//       num = num / 2;
//       steps += 1;
//     } else if (num % 2 !== 0) {
//       num = num * 3 + 1;
//       steps += 1;
//     }
//   }
//   return steps;
// };

// const largestPalindromeProduct = () => {
//   const isPalindrome = (num) => {
//     const strNum = num.toString();
//     const reversed = strNum.split("").reverse().join("");
//     return strNum === reversed;
//   };
//   let largestPalindrome = 0;
//   for (let i = 999; i >= 100; i--) {
//     for (let j = i; j >= 100; j--) {
//       const product = i * j;
//       if (product <= largestPalindrome) {
//         break;
//       }
//       if (isPalindrome(product)) {
//         largestPalindrome = product;
//       }
//     }
//   }
//   return largestPalindrome;
// };

console.log(largestPalindromeProduct());
