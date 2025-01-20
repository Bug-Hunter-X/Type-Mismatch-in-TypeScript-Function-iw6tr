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

//This will throw a compilation error because the types do not match 
let result2 = add(5, "3");
console.log(result2);