// const reduce = (array) => {
//   let total = 0;
//   for (num of array) {
//     total += num;
//   }
//   return total;
// };

// const lessThan100 = (nums) => {
//   let returnArray = [];
//   for (num of nums) {
//     if (num < 100) {
//       returnArray.push(num);
//     }
//   }
//   return returnArray;
// };

// const double = (nums) => {
//   let doubled = [];
//   for (num of nums) {
//     doubled.push(num * 2);
//   }
//   return doubled;
// };

// const max = (nums) => {
//   let highest = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > highest) {
//       highest = nums[i];
//     }
//   }
//   return highest;
// };

// const product = (nums) => {
//   let number = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     number *= nums[i];
//   }
//   return number;
// };

// const reverse = (nums) => {
//   let reversed = [];
//   for (let i = nums.length - 1; i >= 0; i--) {
//     reversed.push(nums[i]);
//   }
//   return reversed;
// };

const skipIt = (nums) => {
  // create new array to hold new values
  // create placeholder for index in nums
  // create placeholder for index in newNums
  // push first num to new array
  // increment according to first char of new array
  // push that num to new array
  // iterate according to num that was just added to new array
  let newNums = [];
  let index = 0;
  while (index < nums.length) {
    newNums.push(nums[index]);
    index += nums[index];
  }
  console.log(newNums);
};
console.log(skipIt([2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]));
