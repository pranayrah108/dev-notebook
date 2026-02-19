// var array = [0, [1, 2, [33, 44]], [4, 5, 6, 7], [7, 8], 90];

// var newArr = [];

// function getFlatArray(array) {
//   for (let index = 0; index < array.length; index++) {
//     if (typeof array[index] == "number") {
//       newArr.push(array[index]);
//     } else {
//       getFlatArray(array[index]);
//     }
//   }
// }

// getFlatArray(array);
// console.log(newArr);

//////////////////////////////////////////////////////

// let str = "Pranay Rahangdale";

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverseString(str));

//////////////////////////////////////////////////////

// str = "I love my india";

// function FindLongestWord(sentence) {
//   const words = sentence.split(" ");

//   let longestWord = "";
//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(FindLongestWord(str));

//////////////////////////////////////////////////////

// str = "nampraan";

// function isPallindrome(str){
//     const reverseStr = str.split("").reverse().join('');
//     return str === reverseStr;
// }

// console.log(isPallindrome(str));

////////////////////////////////////////////////////////

// arr = [1, 1, 2, 3, 44, 44, 5, 65, 33, 3, 33, 3, 3, 3];

// function removeDuplicate(arr) {
//   const uniqueElements = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueElements.indexOf(arr[i]) === -1) {
//       uniqueElements.push(arr[i]);
//     }
//   }

//   return uniqueElements;
// }

// console.log(removeDuplicate(arr));

////////////////////////////////////////////////////////

// function areAnagram(str1, str2) {
//   const sortedStr1 = str1.split("").sort().join("");
//   const sortedStr2 = str2.split("").sort().join("");

//   return sortedStr1 === sortedStr2;
// }

// console.log(areAnagram("listen", "silent"));

////////////////////////////////////////////////////////

// country = "Indonatiaour";

// function countVowels(str) {
//   const vowels = ["a", "e", "i", "o", "u"];

//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels(country));

////////////////////////////////////////////////////////

// arr = [1, 1, 2, 3, 44, 44, 5, 65, 33, 3, 33, 3, 3, 3];

// function FindLargestNumbser(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// console.log(FindLargestNumbser(arr));

//////////////////////////////////////////////////////

// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }

//   let factorial = 1;

//   for (let i = 1; i <= num; i++) {
//     factorial *= i;
//   }

//   return factorial;
// }

// console.log(factorial(5));

//////////////////////////////////////////////////////

// function removeWhiteSpace(str){
//     const result = str.replace(/\s/g,"");
//     return result;
// }

// console.log(removeWhiteSpace("              pranau"));
// console.log("                    pran")

//////////////////////////////////////////////////////////////

// function generateRandomNo() {
//   const randomNumber = [];

//   for (let i = 0; i < 10; i++) {
//     randomNumber.push(Math.floor(Math.random() * 100));
//   }

//   return randomNumber;
// }

// console.log(generateRandomNo());

/////////////////////////////////////////////////////////////

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;

for (let i = 0; i < arr.length; i++) {

  console.log(arr[i][i]);
  sum += arr[i][i];
}

console.log(sum); // 15

//////////////////////////////////////////////////////////////

/**
 * 
 * let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

 */

/**
  let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i === j) {
      sum += arr[i][j];
    }
  }
}

console.log(sum); // 15

 */


//////////////////////////////////////////////////////////////////

// var array = [0, [1, 2, ["a", "b", [33, "hello"]]], [4, 5, 6, 7], [7, 8], 90];

// var newArr = [];

// function getFlatArray(arr) {
//   for (let index = 0; index < arr.length; index++) {
//     if (Array.isArray(arr[index])) {
//       getFlatArray(arr[index]); // recursion for nested arrays
//     } else {
//       newArr.push(arr[index]); // number, string, boolean, etc.
//     }
//   }
// }

// getFlatArray(array);
// console.log(newArr);
