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

console.log('reverse of a string 1----', reverseString(str1));

// second way shortcut

function reverseString1(str) {
  // split the string into an array of characters
  // reverse the order of elements in the array
  // join the characters back together into a string
  return str.split("").reverse().join("");
}
console.log('reverse of a string 2----', reverseString1(str1));


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

console.log('findLongestWord----', findLongestWord(sentence))


//#### 3. write a function that checks whether a given string is a palindrome or not
// A palindrome is word that reads the same forward and backward
const pal = 'racecar';

function isPalindrome(str) {
  //step 1: reverse the string
  const reverseStr = str.split("").reverse().join("");

  //step 2: compare the reversed string with the original string
  return str === reverseStr;
}

console.log('is palindrome----', isPalindrome(pal));

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

console.log("remove Duplicates ----", removeDuplicates(dupArr));

//using set
function removeDuplicatesSet(arr) {
  return [...new Set(arr)]
}
console.log("remove Duplicates Set Method ----", removeDuplicatesSet(dupArr));


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

console.log('areAnagrams', areAnagrams("listen", 'silent'))

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


console.log('numbers of vowels -----', countVowels("hello, world!"))


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

console.log('findLargestNumber ----', findLargestNumber([2,4,6,9,3]))


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

console.log('isPrime ----', isPrime(7))
console.log('isPrime ----', isPrime(10))


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

console.log('factorial-----', factorial(5)); //1*2*3*4*5

//#### 10: write a program to remove all whitespace characters from a string
const inputStr = "   javascript,       happy";

function removeWhiteSpace(str) {
  const result = str.replace(/\s/g, "");

  return result
}

console.log('removeWhiteSpace ----', removeWhiteSpace(inputStr));
