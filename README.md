# tandemloop-screen-test
 first screen test ( 4 problems  solved)

CODING LANGUAGE USED - JavaScript
( *Q1 ) problem 1:roblem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.

  Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’

  Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
  
solution:
Calculator Program Description
This program implements a basic calculator in JavaScript using a class-based approach. It allows users to perform mathematical operations (addition, subtraction, multiplication, division) by taking input directly from the user.
eatures
Class-Based Implementation:

The calculator is implemented as a class named Calculator for modularity and reusability.
User Interaction:

Inputs for the first number, second number, and the desired operation are taken directly from the user via prompt().
Dynamic Operation Handling:

The program supports four operations:
Addition (addition)
Subtraction (subtraction)
Multiplication (multiplication)
Division (division)
Error Handling:

Handles invalid operations with an error message.
Prevents division by zero with an appropriate error alert.
Output:

Displays the result of the calculation using console.log and alert.
Code Walkthrough
Class Declaration:

The Calculator class has a constructor that accepts three inputs:
a: First operand (a number).
b: Second operand (a number).
operation: Operation type (a string).
Example: new Calculator(10, 5, "addition").
Method - performOperation():

The method uses conditional statements (if-else) to determine the appropriate operation based on the user input.
Handles four cases:
Addition: Returns the sum of a and b.
Subtraction: Returns the difference of a and b.
Multiplication: Returns the product of a and b.
Division: Returns the quotient of a and b. Division by zero triggers an error message.
Error Handling:

If the user provides an invalid operation, the program displays an error message like "Error: Invalid operation type.".
If division by zero is attempted, the program displays an error like "Error: Division by zero is not allowed.".
User Input:

The program uses prompt() to gather user input:
The first number (a).
The second number (b).
The operation type (addition, subtraction, multiplication, or division).
Output:

The result of the calculation is displayed using both:
console.log: Outputs the result in the console.
alert: Displays the result in an alert box for user convenience.

