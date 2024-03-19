"use strict";

/* function getGrade (s1, s2, s3) {
    const average = (s1 + s2 + s3) / 3;
    if (average <= 100 && average >= 90) {
      console.log('A');
    } else if (average <= 90 && average >= 80) {
        console.log('B')
    }else if (average <= 80 && average >= 70) {
        console.log('C')
    }else if (average <= 70 && average >= 60) {
        console.log('D')
    }else {
        console.log('F')
    }
    
  }
  getGrade(95,90,93)
  getGrade(70,70,100)
 */

/* var countSheep = function (num) {
  let sheep = "";
  for (let i = 1; i <= num; i++) {
    sheep += `${i} sheep... `;
  }
  console.log(sheep);
};
countSheep(4);
 */
// .split(‘’)
// .reverse()
// .join(‘’)
// .split(‘ ‘)
// .reverse()
// .join(‘ ‘);
// Reversed Words
/* function reverseWords(str) {
  // const strArr = str.split(" ");

  // let reverseStr = '';
  // for(let i = strArr.length - 1; i >= 0; --i) {
  //   reverseStr += `${strArr[i]} `
  // }
  // console.log(strArr);
  // console.log(`reverseStr -`, reverseStr.slice(0,reverseStr.length));
  let split = str.split(' ');
  console.log(split);
  let reverse = split.reverse();
  console.log(reverse);
  let join = reverse.join(' ');
  console.log(join);
  console.log(str.split(' ').reverse().join(' '));
}

reverseWords("The greatest victory is that which requires no battle");


let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);


function paperwork(n, m) {
  // let totalPaperWork = n * m;
  // if (totalPaperWork > 0) {
  //   console.log(totalPaperWork);
  // } else {
  //   console.log('0');
  // }
  // console.log(totalPaperWork > 0 ? totalPaperWork :'0')
  const calcBlankPages = n * m;
  console.log(n < 0 || m < 0 ? 0 : calcBlankPages);
}
paperwork(5, -5) */

/* function arrayPlusArray(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  console.log(newArr);
  let val = newArr.reduce(function(accumulator, currentValue){
    console.log(accumulator, currentValue)
    return accumulator + currentValue;
  });
  
  console.log(val);
}

arrayPlusArray([1, 2, 3], [4, 5, 6])
 */
/* 
function simpleMultiplication(number) {
  let checkOddeven = number % 2 == 0;
  console.log(checkOddeven);
  if (checkOddeven) {
    console.log(number * 8);
  } else {
    console.log(number * 9);
  }
}

simpleMultiplication(267);


const arr = N => Array.from({length: N}, (_,index) => index);

console.log(arr(5));


function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i)
  }
  console.log(arr);
}

between(1, 4)
 */

/* function bonusTime(salary, bonus) {
  console.log(bonus ? `\u00A3${salary * 10}`  : `\u00A3${salary}`);
}

bonusTime(10000, true)
 */

/* function squareOrSquareRoot(array) {
  let newArr = [];
  for (let i = 0; i <= array.length; i++) {
    // newArr.push(Math.sqrt(i));
    console.log(Math.sqrt(array[i]), Math.sqrt(array[i]).toFixed(0));
    console.log(Math.sqrt(array[i]) == Math.sqrt(array[i]).toFixed(0));
  }
  // console.log(array);
  console.log(
    array.map((item) =>
      Math.sqrt(item) == Math.sqrt(item).toFixed(0)
        ? Math.sqrt(item)
        : item * item
    )
  );
}

squareOrSquareRoot([4, 3, 9, 7, 2, 1]);
 */
/* function myFunction(a) {
  console.log(a, a.length/2);
  console.log(a, a.slice(0, a.length/2) );
  return 
}

myFunction("abcdefgh"); 
function myFunction(obj) {
  console.log(obj?.a?.b)
  return 
}

myFunction({a:1})
myFunction({a:{b:{c:3}}})
myFunction({b:{a:1}})
myFunction({a:{b:2}})


myFunction("abcdefgh");


function myFunction(a) {
  console.log(a.indexOf('is'))
  return 
}

myFunction("praise");
myFunction("risky")
myFunction("paris")


function myFunction(a, b) {
  console.log(a[b] ? true : false)
  return 
}

myFunction({a:1,b:2,c:3},'b');
myFunction({x:'a',y:null,z:'c'},'y');
myFunction({x:'a',b:'b',z:undefined},'z');
 */
/* 
function
myFunction
(
a, b, c, d, e, f
)
{

console.log(((((a + b) - c) * d) / e) ** f); 
}

myFunction(6,5,4,3,2,1)
myFunction(6,2,1,4,2,3)
myFunction(2,3,6,4,2,3) */

/* function myFunction(a, b) {
  console.log(a[b])
  return 
}

myFunction({a:1,b:2,c:3},'b');
myFunction({x:'a',y:null,z:'c'},'y');
myFunction({x:'a',b:'b',z:undefined},'z');


function myFunction(set, val) {
  console.log(`----`, set.delete(val));
  console.log(set)
  return 
}

myFunction(new Set([1, 2, 3]), 1)
myFunction(new Set('12345'), '3')
myFunction(new Set([1, 2, 3]), 4)


var number = function(busStops){
  var people = 0;
  var people1 = 0;
  for (let stop of busStops) {
    const [getIn, getOut] = stop;
    people += getIn - getOut;
  }
  console.log(people);
  
  for (let i = 0; i < busStops.length; i++) {
    console.log(busStops[i]);
    const [getIn1, getOut] = busStops[i];
    people1 += getIn1 - getOut;
  }
  
  console.log(people1);
}

number([[10,0],[3,5],[5,8]])
 */

// function feast(beast, dish) {
/* const beastArr = [...beast];
   // console.log(beastArr)
  const [beastLetter1, beastLetter2] = [beastArr[0], beastArr[beastArr.length -1] ]
  console.log(beastLetter1, beastLetter2)

  const dishArr = [...dish];
  // console.log(dishArr)
  const [dishLetter1, dishLetter2] = [dishArr[0], dishArr[dishArr.length -1] ]
  console.log(dishLetter1, dishLetter2)

  if(beastLetter1 === dishLetter1 && beastLetter2 === dishLetter2) {
    console.log(true);
  } else {
    console.log(false);
  }  

  console.log(beastLetter1 === dishLetter1 && beastLetter2 === dishLetter2 ? true : false)
 */

/*   const [beastStart, beastEnd] = [beast[0], beast[beast.length -1]];
  
  const [dishStart, dishEnd] = [dish[0], dish[dish.length -1]];
  
  console.log(beastStart, beastEnd)
  console.log(dishStart, dishEnd)
  console.log(beastStart === dishStart && beastEnd === dishEnd ? true : false);
  return beastStart === dishStart && beastEnd === dishEnd ? true : false;

}

feast("great blue heron", "garlic naan")
feast("chickadee", "chocolate cake")
feast("brown bear", "bear claw") */
/* 

function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  // console.log(input);
  if (input === null || input.length === 0) {
    return [];
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        count += 1;
      } else {
        sum += input[i];
      }
    }
  }
  console.log("test", [count, sum]);
}

countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);
countPositivesSumNegatives([]);


String.prototype.isUpperCase = function () {
  // if (str === str.toUpperCase()) {
  //   console.log(true);
  //   return true;
  // } else {
  //   console.log(false);
  //   return false;
  // }
  console.log(this.toString() === this.toUpperCase());
};

let str = "hello I AM DONALD";
str.isUpperCase();

 */

// function powersOfTwo(n){
//   let arr = [];
//   for (let i = 0; i <= n; i++) {
//     arr[i] = 2**i;
//   }
//   console.log(arr);
// }

// // powersOfTwo(0);
// // powersOfTwo(1);
// powersOfTwo(4);

/* var arr = [1, 2, 3];
var fn = function plusone(n) {
  return n + 1;
};
var map = function (arr, fn) {
  console.log("🚀 ~ file: script.js:337 ~ map ~ arr:", arr);
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  console.log("🚀 ~ file: script.js:341 ~ map ~ newArr:", newArr);
  return newArr;
};

map(arr, fn);
*/

/* var arr = [0, 10, 20, 30];
var fn = function greaterThan10(n) {
  return n > 10;
};

var filter = function (arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  console.log("🚀 ~ file: script.js:360 ~ filter ~ newArr:", newArr);
  return newArr;
};

filter(arr, fn); */
/* 
var arr = [0, 10, 20, 30];
var fn = function greaterThan10(n) {
  return n > 10;
};

var filter = function (arr, fn) {
  var newArr = arr.filter(fn);
};

filter(arr, fn);
 */

/* 
var compose = function(functions) {
	return function(x) {
        let n = x;
        for(let i = functions.length -1; i >= 0; i--) {
          console.log("🚀 ~ file: script.js:387 ~ returnfunction ~ n:", n)
            n = functions[i](n);
        }
        
        console.log("🚀 ~ file: script.js:390 ~ returnfunction ~ n:", n)
        return n;
    }
};


const fn = compose([x => x + 1, x => 2 * x])
fn(4) // 9
 */

function memoize(fn) {
  const cache = {};
  
  return function (...args) {
    const key = JSON.stringify(args);
    console.log("🚀 ~ file: script.js:405 ~ key:", key)
    
    if (key in cache) {
      return cache[key];
    }
    
    const result = fn.apply(this, args);
    cache[key] = result;
    
    console.log("🚀 ~ file: script.js:402 ~ memoize ~ cache:", cache)
    return result;
  };
}

const memoizedSum = memoize(function (a, b) {
  return a + b;
});

console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
console.log(memoizedSum(2, 3)); // Output: 5
console.log(memoizedSum(2, 3)); // Output: 5
console.log(memoizedSum(2, 3)); // Output: 5
console.log(memoizedSum(2, 4)); // Output: 5
