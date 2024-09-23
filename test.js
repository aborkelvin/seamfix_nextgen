// Codewars classwork
/* function arrayDiff(arrayOne, arrayTwo) {  
  for (let i = 0; i < arrayTwo.length; i++) {
    arrayOne = arrayOne.filter((item) => item !== arrayTwo[i]);
  }
  return arrayOne;
}

console.log(arrayDiff([1, 2, 2, 2, 3, 10, 12, 10], [2, 10])); */
/* 
const arrayDiff2 = (arrayOne, arrayTwo) =>
  arrayOne.join(", ").replaceAll(arrayTwo[0], "").split("");
console.log(arrayDiff2([1, 2, 2, 2, 3, 10, 12, 10], [2, 10]));
 */

/* Codewars Assignment */

/* 
No.1:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements 
with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/
/* var uniqueInOrder = function (iterable) {
  //Thought process: Loop through the iterable, if the current item isnt same as the past item, add it to our final array
  // Then return the final array
  let finalArray = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      finalArray.push(iterable[i]);
    }
  }

  return finalArray;
};
console.log(uniqueInOrder([1, 2, 2, 3, 3])); */

//No 2:
/* 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

/* function XO(str) {
  //code here
  // Thought process: lowercase for case insensitive, loop through to count no. of os and of xs, compare results
  let lCaseStr = str.toLowerCase().split("");
  //console.log(lCaseStr);
  let x = 0,
    o = 0;

  lCaseStr.forEach((item) => {
    item == "x" ? x++ : item == "o" ? o++ : null;
  });
  return x == o;
}
console.log(XO("oox")); */

// No: 3
/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/
/* function findShort(s) {
  //let newStr = s.split(" ");
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}
console.log(findShort("Obi is a boy")); */

// No: 4
/* 
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
*/
/* function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
console.log(descendingOrder(42145)); */

//No: 5
/* 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)
*/
/* function squareDigits(num) {
  // Thought process:convert to string and array, iterate and return the square of the number, join and reconvert back to number
  return Number(
    num
      .toString()
      .split("")
      .map((item) => Number(item) ** 2)
      .join("")
  );
}
console.log(squareDigits(9119));
 */

/* 

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

/* function sumTwoSmallestNumbers(numbers) {
  //Code here
  return numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1];
} */

/* 
There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
  // do magic
  let newArr = arr.filter((item) => item !== arr[0]);
  console.log(newArr);
  if (newArr.length == 1) {
    return newArr[0];
  } else {
    return arr[0];
  }
}
findUniq([1, 1, 1, 2, 1, 1]);
