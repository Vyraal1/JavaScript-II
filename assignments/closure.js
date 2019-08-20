// ==== Challenge 1: Write your own closure ====
let id = "batman";
function greet() {
  console.log("");
}

// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */
// ==== Challenge 2: Implement a "counter maker" function ====
// 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
// 2- Declare a function `counter`. It should increment and return `count`.
//      NOTE: This `counter` function, being nested inside `counterMaker`,
//      "closes over" the `count` variable. It can "see" it in the parent scope!
// 3- Return the `counter` function.

const counterMakerBeta = () => {
  let count = 1;
  return () => count++;
};
// Example usage:
const betaCounter = counterMakerBeta();
for (let i = 0; i < 100; i++) {
  console.log(betaCounter()); // 1
}

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// Is it better to use arrow notation here? What happens if they wanted to use it earlier?
// Was told you should use arrow notation if you are returning a value, but if you are performing actions, use function
function counterMaker(limit) {
  let count = 1;
  return () => (count > limit ? (count = 1) : count++);
}
// Example usage:
const myCounter = counterMaker(40);
for (let i = 0; i < 100; i++) {
  console.log(myCounter()); // 1
}

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
const counterFactory = () => {
  let count = 1;
  return {
    increment: () => count++,
    decrement: () => count--
  };
};
