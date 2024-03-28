"use strict";

//#### 1. write a function that returns the reverse of a string
const str1 = "learn javascript";

// one way - using for loop
function reverseString(str) {
// initialize an empty string to store the reversed string
let reversed = '';

// iterate through the characters of the input string in reverse order
for(let i = str.length -1; i >= 0; i--) {
  reversed += str[i];
}
return reversed;
}

console.log('1. reverse of a string 1----', reverseString(str1));

// second way shortcut

function reverseString1(str) {
  // split the string into an array of characters
  // reverse the order of elements in the array
  // join the characters back together into a string
  return str.split("").reverse().join("");
}
console.log('1.1. reverse of a string 2----', reverseString1(str1));


//#### 2. write a function that return the longest word in the sentence
const sentence = "I love coding in javascript";
function findLongestWord(sentence) {
  //step 1: split the sentence into an array of words
  const words = sentence.split(' ');

  // initialize an empty string to store the word
  let longestWord = '';

  // step 2: iterate through each word in the array
  for (let word of words) {
    // step 3: check if the current word is longer then the current longest word
    if(word.length > longestWord.length) {
      //step4: if true, update the longestWord variable
      longestWord = word;
    }
  }
  return longestWord;
}

console.log('2. findLongestWord----', findLongestWord(sentence))


//#### 3. write a function that checks whether a given string is a palindrome or not
// A palindrome is word that reads the same forward and backward
const pal = 'racecar';

function isPalindrome(str) {
  //step 1: reverse the string
  const reverseStr = str.split("").reverse().join("");

  //step 2: compare the reversed string with the original string
  return str === reverseStr;
}

console.log('3. is palindrome----', isPalindrome(pal));

//#### 4. write a function to remove duplicate element from an array
const dupArr = [1,2,3,4,4,5,6,6];

// using for loop
function removeDuplicates(arr) {
  //empty array to store unique elements
  const uniqueElements = [];

  //loop through the input array
  for (let i = 0; i < arr.length; i++) {
    //check if the current element is already in the uniqueElements array
    if (uniqueElements.indexOf(arr[i]) === -1 ) {
      //if not found, push the element to the uniqueElements array
      uniqueElements.push(arr[i]);
    }
  }
  return uniqueElements;
}

console.log("4. remove Duplicates ----", removeDuplicates(dupArr));

//using set
function removeDuplicatesSet(arr) {
  return [...new Set(arr)]
}
console.log("4.1. remove Duplicates Set Method ----", removeDuplicatesSet(dupArr));


//#### 5. write a function that checks whether two strings are anagrams or not
// An anagram is a word formed by rearranging the letters of another word.

function areAnagrams(str1, str2) {
  //step1: split the strings into arrays of characters
  //step2: sort the characters in each array
  const shortedStr1 = str1.split("").sort().join("");
  const shortedStr2 = str2.split("").sort().join("");

  //step 3: compare the sorted strings
  return shortedStr1 === shortedStr2;
}

console.log('5. areAnagrams', areAnagrams("listen", 'silent'))

//#### 6 write a function that returns the numbers of vowels in a string
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  // step 1: iterate through each character in the string
  for(let char of str.toLowerCase()) {
    //step 2: check if the character is a vowel
    if(vowels.includes(char)) {
      //step 3: if true, increment the count
      count++
    }
  }
  return count;
}


console.log('6. numbers of vowels -----', countVowels("hello, world!"))


//#### 7: write a function to find the largest number in an array

function findLargestNumber(arr) {
  //step 1: set the initial largest element to the first element of the array
  let largest = arr[0];

  //step 2: Iterate through the array and update the largest element if a larger element is found
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log('7. findLargestNumber ----', findLargestNumber([2,4,6,9,3]))


//#### 8: write a function to check if a given number is prime or not
// A prime number is only divisible by 1 and itself

function isPrime(number) {
  //step 1: Numbers less then 2 are not prime
  for(let i =2; i <= number / 2; i++) {
    //step 2: Reminder must not be zero to be prime
    if (number % i === 0) {
      return false; // number is divisible by i, hence not prime
    }
  }
  return true;
}

console.log('8. isPrime ----', isPrime(7))
console.log('8.1. isPrime ----', isPrime(10))


//#### 9: write a function to calculate the factorial of a number
function factorial(num) {
  //step 1: handle edge case for 0
  if(num === 0) {
    return 1;
  }
  // step 2: initialize the factorial variable
  let factorial = 1;

  // step 3: Multiply number from 1 to num to calculate the factorial
  for(let i = 1 ; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log('9 .factorial-----', factorial(5)); //1*2*3*4*5

//#### 10: write a program to remove all whitespace characters from a string
const inputStr = "   javascript,       happy";

function removeWhiteSpace(str) {
  const result = str.replace(/\s/g, "");

  return result
}

console.log('10. removeWhiteSpace ----', removeWhiteSpace(inputStr));


//#### 11: Write a function to find the sum of all elements in an array
const sumArr = [1,2,3,4,5];

function findSum(arr) {

  //step 1: calculate the sum of the array element
  let sum =0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  // step2: return the sum
  return sum

}

console.log('11. sum of all elements in an array ----' , findSum(sumArr));

//#### 12: Write a function to find the average of an array of numbers
const arrAvg = [1,2,3,4,5];

function findAverage(arr) {
  //step 1: calculate the sum of the array element
  let sum = 0;

  for(let i =0; i < arr.length; i++) {
    sum += arr[i];
  }

  // step 2: divide the sum by the number of elements in the array
  let average = sum / arr.length;

  // step2: return the average
  return average;
}

console.log('12. average of an array of numbers ---- ', findAverage(arrAvg))

//#### 13: white a function to sort an array of numbers in ascending order
const sortArr = [10, 1, 20, 2, 5];

function sortArrayAscending(arr) {
  // a and b will start from 10, 1
  // if a-b is positive then swap
  // if a-b is negative or 0 then don't swap
  return arr.sort((a, b) => a - b);
}

console.log('13. sort an array of numbers in ascending order ---- ', sortArrayAscending(sortArr));


//#### 14. Write a function to check if a given array is sorted in ascending order or not
const arrSorted = [1,2,3,4,5];

function isSorted(arr) {

  //step 1: Iterate through the array starting from the second element
  for(let i = 1; i < arr.length; i++) {

    // step2: compare the current element with the previous element
    if(arr[i - 1] > arr[i]) {
      return false; // if the current element is smaller, the array is not sorted
    }
  }
  // Step 3: if all elements are in sorted order, return true
  return true;
}

console.log('14. check if a given array is sorted in ascending order or not ---- ', isSorted(arrSorted));

//#### 15. Write a function to merge two arrays into a single sorted array.
const array1 = [10, 3, 5, 7];
const array2 = [2, 20, 6, 8];

function mergeSortedArrays(arr1, arr2) {
  //step 1: concatenate the teo arrays in to a single array
  const mergedArray = arr1.concat(arr2);
  
  // a and b will start from 10, 1
  // if a-b is positive then swap
  // if a-b is negative or 0 then don't swap
  // Step 2: sort the merged array in ascending order
  const sortedArray = mergedArray.sort((a, b) => a - b);
  return sortedArray;

}

console.log('15. merge two arrays into a single sorted array ---- ', mergeSortedArrays(array1, array2));


//#### 16. Write a function to remove a specific element from an array
const remArr = [1, 2, 3, 2, 4];

function removeElement(arr, target) {
  // step 1: use the array.filter() method to create
  // a new array with elements not equal to the target

  let filteredArray = arr.filter(function (element) {
    return element !== target;
  })

  // step 2: Return the filtered array
  return filteredArray;
}

console.log('16. remove a specific element from an array ---- ', removeElement(remArr, 2))

//#### 17. Write a function to find the second largest element in an array
const secArr = [2, 10, 2, 8, 3];
  
// one way - using for loop


// second  way - using for loop
function findSecondLargest (arr) {
  // step 1 sort the array in descending order
  const sortedArr = arr.sort((a, b) => b - a);

  //step 2: pick the second number from start
  let secondLargest = sortedArr[1];

  return secondLargest;

}

console.log('17. find the second largest element in an array ---- ', findSecondLargest(secArr));

//#### 18. Write a function to reverse the order of words in a given sentence.
const str3 = 'hello world';

function reverseWords(sentence) {

  //Step 1: Split the sentence into an array of words
  let words = sentence.split(' ');

  //step 2: reverse the array of words
  let reverseWords = words.reverse();

  // step 3: join the reversed words into a new sentence
  let reverseSentence = reverseWords.join(' ');
  
  return reverseSentence;
}

console.log('18. reverse the order of words ---- ', reverseWords(str3));


//#### 19. write a function fo find the longest common prefix among an array of strings
const str4 = ['flower', 'flow', 'flight'];

function longestCommonPrefix(strs) {
  // initialize the prefix with the first string
  let prefix = strs[0];

  // iterate through the remaining strings in the array
  for (let i = 1; i < strs.length; i++) {
    //find the common prefix between the current string and the prefix
    while (strs[i].indexOf(prefix) !== 0) {

      // remove the last character from the prefix until it matches
      // the beginning of the current string
      prefix = prefix.slice(0, prefix.length -1);
    }
  }
  return prefix;

}

console.log('18. find the longest common prefix among an array of strings ---- ', longestCommonPrefix(str4));

//#### 20. Write a function to find the intersection of two arrays.

function findIntersection(arr1, arr2) {

  // step1: Use the set data structure to store unique elements from the first array
  let set = new Set(arr1);

  // step2: Use the Array.filter() method to create an array of common elements
  let intersection = arr2.filter(function (element) {
    return set.has(element);
  })

  return intersection;

}

console.log('20, find the intersection of two arrays ---- ', findIntersection([1,2,3,4], [2,3,5,6])); //output: [2, 3]

//#### 21. Write a function to calculate the Fibonacci sequence up to a given number 
// the fibonacci series start with 0 and 1.
// Each subsequent number is the sum of the two preceding numbers

let n = 10;

function fibonacciSeries(n) {

  //Step 1: Initialize the fibonacci series with the first numbers

  var fibonacci = [0, 1];

  // Step 2: Start from index 2, as the first two numbers are already defined
  for (let i = 2; i < n; i++) {
    // Step 3: calculate the sum of the two preceding numbers
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]);
    console.log("🚀 ~ fibonacciSeries ~ fibonacci[i]:", fibonacci[i], fibonacci[i - 1], fibonacci[i - 2])
  }
  return fibonacci;
}


console.log('21. calculate the Fibonacci sequence up to a given number ---- ', fibonacciSeries(n));
