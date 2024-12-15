// Define the Calculator class
class Calculator {
    // Constructor initializes values of 'a', 'b', and the operation type
    constructor(a, b, operation) {
      this.a = a; // First operand
      this.b = b; // Second operand
      this.operation = operation; // Type of operation (e.g., addition)
    }
  
    // Method to perform the calculation
    performOperation() {
      // Check the type of operation and perform the respective calculation
      if (this.operation === "addition") {
        return this.a + this.b; // Addition
      } else if (this.operation === "subtraction") {
        return this.a - this.b; // Subtraction
      } else if (this.operation === "multiplication") {
        return this.a * this.b; // Multiplication
      } else if (this.operation === "division") {
        if (this.b === 0) {
          return "Error: Division by zero is not allowed."; // Handle division by zero
        }
        return this.a / this.b; // Division
      } else {
        return "Error: Invalid operation type."; // Handle invalid operation
      }
    }
  }
  
  // Function to get user input and use the Calculator class
  function runCalculator() {
    // Get inputs from the user
    let a = parseFloat(prompt("Enter the first number (a):")); // Convert input to a number
    let b = parseFloat(prompt("Enter the second number (b):")); // Convert input to a number
    let operation = prompt(
      "Enter the type of operation (addition, subtraction, multiplication, division):"
    ).toLowerCase(); // Get operation type and convert to lowercase
  
    // Create an instance of Calculator
    const calc = new Calculator(a, b, operation);
  
    // Perform the operation and show the result
    const result = calc.performOperation();
    console.log(`Result of ${operation}:`, result);
    alert(`Result of ${operation}: ${result}`); // Show the result to the user
  }
  
  // Run the calculator
  runCalculator();
  