var l1 = [2, 4, 3];
var l2 = [5, 6, 4];

function sumLists(l1, l2) {
  let returnArray = [];
  var num1 = Number(l1.reverse().join(""));
  var num2 = Number(l2.reverse().join(""));
  var sum = num1 + num2;
  sum = sum.toString();
  sum = sum.split("").reverse();
  for (let i = 0; i < sum.length; i++) {
    returnArray.push(+sum[i]);
  }
  return returnArray;
}

console.log(sumLists(l1, l2));
