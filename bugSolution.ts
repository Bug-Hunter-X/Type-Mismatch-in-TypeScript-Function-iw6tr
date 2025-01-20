function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
console.log(result); // Outputs 8

result = subtract(10, 5); // result is 5
console.log(result); //Outputs 5

// Correct the types to match the function signature
let result2 = add(5, 3); //Corrected
console.log(result2); //Outputs 8

//Alternatively, use type assertion if you are sure about the type. 
let result3 = add(5, <number>"3");
console.log(result3); //Outputs NaN.  Note that string "3" is converted to number but causes different behavior from above.