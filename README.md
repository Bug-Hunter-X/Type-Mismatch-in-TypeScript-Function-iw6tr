# Type Mismatch in TypeScript Function

This example demonstrates a common type-related error in TypeScript. The `add` function is defined to accept two numbers as input and return a number. However, in the example, we attempt to pass a string ("3") as an argument. This causes a type mismatch error because TypeScript's type system ensures that function arguments match the expected types.  The solution shows how to fix this issue. 

## How to fix this bug

To solve this problem, ensure that the types of the arguments passed to the function match the types specified in the function's signature.