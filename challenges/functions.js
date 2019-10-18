// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb){
  return cb(a, b);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
//ONE

  function add(a, b) {
  return a + b;
};
console.log(add(5,10));


//TWO

  function multiply(a, b) {
  return a * b;
};
console.log(multiply(5, 10))


//THREE

  function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
};

//console.log(greeting(Lisa, Cook)); //// Lisa showing undefined in console but I have to move on to the next task! 

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:Its function scoped aka a one way street. Can inherit up but not inherit down. It can go from outside(global) to inside(local), but cannot go from local to global. 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
