// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

// // GIVEN THIS PROBLEM:

// function firstItem(arr, cb) {
//   // firstItem passes the first item of the given array to the callback function.
// }

// // SOLUTION:

// function firstItem(arr, cb) {
//   return cb(arr[0]);
// }

// NOTES ON THE SOLUTION:

// firstItem is a higher order function.
// It expects a callback (referred to as `cb`) as its second argument.
// To test our solution, we will use the given `items` array and a variety of callbacks.
// Note how callbacks can be declared separately, or inlined.

// TEST 1 (inlined callback):

//firstItem(items, item => console.log(`I love my ${item}!`));
// "I love my Pencil!"

// TEST 2 (declaring callback before hand):

function logExorbitantPrice(article) {
  console.log(`this ${article} is worth a million dollars!`);
}

//firstItem(items, logExorbitantPrice);
// "this Pencil is worth a million dollars!"

function getLength(arr, cb) {
  return cb(arr.length);
}

getLength([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], console.log);

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}
last([1, 2, 3, 4, 5, 6], console.log);

function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(5, 5, console.log);

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(5, 5, console.log);

function contains(item, list, cb) {
  return cb(list.includes(item));
}

contains(5, [1, 2, 3, 4, 6], console.log);
contains(5, [1, 2, 3, 4, 5], console.log);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  return cb([...new Set(array)]);
}

let test1 = [10, 11, 11, 11, 11, 9, 9, 9, 4, 3, 4, 3, 4, 3, 2, 1, 2, 3, 10];
removeDuplicates(test1, console.log);
